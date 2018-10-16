var express = require("express");
const { parse } = require("querystring");
var router = express.Router();
var db = require("./db").getDb();

//Get vendors
router.get("/vendors", function(req, res, next) {
  db.vendors.find(function(err, vendors) {
    if (err) {
      res.send(err);
    }
    res.json(vendors);
  });
});

//Save vendor
router.post("/vendor", function(req, res, next) {
  let body = "";
  req.on("data", chunk => {
    body += chunk.toString(); // convert Buffer to string
  });
  req.on("end", () => {
    var vendor = JSON.parse(body);
    console.log(vendor);
    if (vendor.PICKUP_NAME == "" || vendor.PICKUP_NAME == undefined) {
      res.status(400);
      res.json({
        error: "Bad data"
      });
    } else {
      db.vendors.save(vendor, function(err, vendor) {
        if (err) {
          res.status(400);
          res.json({ error: "Bad data" });
        }
        res.json(vendor);
      });
    }
  });
});

//finally export to be used in application
module.exports = router;
