const express = require('express');
const app = express();
const path = require('path');
const superagent = require('superagent');

app.use(express.static(__dirname+'/dist'));

app.listen(process.env.PORT||8080);

//Orders
app.get("/shopify/orders", function(req, res) {
    superagent
      .get("https://zinnga.myshopify.com/admin/orders.json")
      .set("Accept", "application/json")
      .auth("f48c2679dcae5ef7a399444b45ab5c95", "fd69fe9f795a4a6248e415b2f1a9907b")
      .end((err, response) => {
        if (err) {
          return console.log(err);
        }
        res.send(response.body);
      });
  });

//Path Location Strategy
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});



console.log('Console Listening'); 