var express = require("express");
const { parse } = require("querystring");
var router = express.Router();
var db = require("./db").getDb();
var mongojs = require("./db").getMongojs();

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

//Get Vendor : id
router.get("/vendor/:id", function(req, res, next) {
  db.vendors.findOne({ _id: mongojs.ObjectId(req.params.id) }, function(
    err,
    vendor
  ) {
    if (err) {
      res.status(400);
      res.json({
        error: "Bad data or issue find the vendor with id:" + req.params.id
      });
    }
    res.json(vendor);
  });
});

//Update vendor
router.put("/vendor/:id", function(req, res, next) {
  let body = "";
  req.on("data", chunk => {
    body += chunk.toString(); // convert Buffer to string
  });
  req.on("end", () => {
    var vendor = JSON.parse(body);
    if (vendor.PICKUP_NAME == "" || vendor.PICKUP_NAME == undefined) {
      res.status(400);
      res.json({
        error: JSON.stringify(vendor)
      });
    } else {
      db.vendors.update({ _id: mongojs.ObjectId(vendor._id) }, vendor, {} ,function(err, vendor) {
        if (err) {
          res.status(400);
          res.json({ error: err });
        }
        res.json(vendor);
      });
    }
  });
});

//finally export to be used in application
module.exports = router;
