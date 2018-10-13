const express = require("express");
const path = require("path");
const superagent = require("superagent");
const nonce = require("nonce")();
const cookie = require("cookie");
const crypto = require("crypto");
const querystring = require("querystring");
const request = require("request-promise");
const mongojs = require("mongojs");
const db = mongojs("mongodb://courierfast:B@ng@ru1528@ds125953.mlab.com:25953/courierfast");

const app = express();

app.use(express.static(__dirname + "/dist"));

app.listen(process.env.PORT || 8080);

//variables
const apiKey = "a35d53496a9148de40d1652be43fd9d3";//process.env.SHOPIFY_API_KEY;
const apiSecret = "2c457122c3e7372ed5dae081cdd130c3"; //process.env.SHOPIFY_API_SECRET;
const scopes = "read_products";
const forwardingAddress = "https://mnk-angular-express.herokuapp.com";

//Get Shopname on app initialized, once app is installed,
// we need to fetch the "shop" which is passed by Shopify via url of the iframe
app.get("/app/t", function(req,res){
  var currentUrl = document.referrer;
  res.send(currentUrl);
});

//Orders
app.get("/shopify/orders", function(req, res) {
  superagent
    .get("https://zinnga.myshopify.com/admin/orders.json")
    .set("Accept", "application/json")
    .auth(
      "f48c2679dcae5ef7a399444b45ab5c95",
      "fd69fe9f795a4a6248e415b2f1a9907b"
    )
    .end((err, response) => {
      if (err) {
        return console.log(err);
      }
      res.send(response.body);
    });
});

//install url: /shopify
app.get("/shopify", (req, res) => {
  const shop = req.query.shop;
  if (shop) {
    const state = nonce();
    const redirectUri = forwardingAddress + "/shopify/callback";
    const installUrl =
      "https://" +
      shop +
      "/admin/oauth/authorize?client_id=" +
      apiKey +
      "&scope=" +
      scopes +
      "&state=" +
      state +
      "&redirect_uri=" +
      redirectUri;

    res.cookie("state", state);
    res.redirect(installUrl);
  } else {
    return res
      .status(400)
      .send(
        "Missing shop parameter. Please add ?shop=your-development-shop.myshopify.com to your request"
      );
  }
});

//redirect url: /shopify/callback
app.get("/shopify/callback", (req, res) => {
  const access_token;
  const { shop, hmac, code, state } = req.query;
  const stateCookie = cookie.parse(req.headers.cookie).state;

  if (state !== stateCookie) {
    return res.status(403).send("Request origin cannot be verified");
  }

  // Validate request is from Shopify
  if (shop && hmac && code) {
    if (!validateRequest(req, hmac)) {
      return "Request invalid or not from shopify";
    }

    //Get permenant access_token for the store and save to DB for future use
    const accessTokenRequestUrl = "https://" + shop + 
    "/admin/oauth/access_token";
    
    const accessTokenPayload = {
      client_id: apiKey,
      client_secret: apiSecret,
      code
    };

    superagent
        .post(accessTokenRequestUrl, {json : accessTokenPayload})
        .end((err,response) => {
          access_token = response.access_token;

          //save to database
          //Save the shope details who are installing the app
          // Shop: Shop name passed by Shopify
          // token: token used to access the shop data, when using the app
          var appUser = {
            shop: shop,
            token:code,
            installdate: new Date(),
            isactive: true
          };

          db.appUsers.save(appUser,function(err, user){
              if(err){
                res.send(err);
              }
              res.json(user);
                });
          });

    // res.render("index", { mystore: mystore });
    res.sendFile(path.join(__dirname + "/dist/index.html"));
  } else {
    res.status(400).send("Required parameters missing");
  }
});

function validateRequest(req, hmac) {
  const map = Object.assign({}, req.query);

  delete map["signature"];
  delete map["hmac"];
  const message = querystring.stringify(map);
  const providedHmac = Buffer.from(hmac, "utf-8");
  const generatedHash = Buffer.from(
    crypto
      .createHmac("sha256", apiSecret)
      .update(message)
      .digest("hex"),
    "utf-8"
  );
  let hashEquals = false;
  // timingSafeEqual will prevent any timing attacks. Arguments must be buffers
  try {
    hashEquals = crypto.timingSafeEqual(generatedHash, providedHmac);
    // timingSafeEqual will return an error if the input buffers are not the same length.
  } catch (e) {
    hashEquals = false;
  }

  if (!hashEquals) {
    return false; //res.status(400).send("HMAC validation failed");
  }
  return true;
  //res.status(200).send("HMAC validated");
}

//Path Location Strategy
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

console.log("Console Listening");
