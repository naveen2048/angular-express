var express = require("express");
const { parse } = require("querystring");
var router = express.Router();
var db = require("./db").getDb();
var mongojs = require("./db").getMongojs();


//Get vendors
router.get("/courier/:shop", function(req,res,next){
  var para = req.params.shop;

  db.couriers.find({ shop: para, isEnabled: true },function(err,couriers){
    if(err){
      res.status(400);
      res.json({ error:"Courier:Get - Not able to fetch data" });
    }
    res.json(couriers);
  });
});

//Save vendor
router.post("/courier", function(req, res, next) {
  let body = "";
  let shop = req.app.get('shop');
  console.log(shop);
  req.on("data", chunk => {
    body += chunk.toString(); // convert Buffer to string
  });
  req.on("end", () => {
    var vendor = JSON.parse(body);
    if (
      vendor.warehouseName == "" ||
      vendor.warehouseName == undefined ||
      vendor.apiKey == "" ||
      vendor.apiKey == undefined
    ) {
      res.status(400);
      res.json({
        error: "Bad data"
      });
    } else {
      db.couriers.save(vendor, function(err, vendor) {
        if (err) {
          res.status(400);
          res.json({ error: "Bad data" });
        }
        res.json(vendor);
      });
    }
  });
});


module.exports = router;
