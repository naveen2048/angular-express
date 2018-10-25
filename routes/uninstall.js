var express = require("express");
const { parse } = require("querystring");
var router = express.Router();
var db = require("./db").getDb();
var mongojs = require("./db").getMongojs();

//Erase Customer data from DB for the passed in shop
router.get("/customers/redact", function(req, res, next) {});

//Erase Shop data from DB for the passed in shop
router.get("/shop/redact", function(req, res, next) {
  //update shop with inactive status
  const { shop_id, shop_domain } = req.query;

  //db call to get the shop information
  db.appUsers.findOne({ shop: shop_domain }, function(err, shop) {
    if (err) {
      res.status(400);
      res.json({
        "error:": err
      });
    }

    //update Db now, as we have the object
    db.appUsers.update(
      { _id: shop._id },
      { $set: { isactive: false, uninstalldate: new Date() } },
      function(err, result) {
        //failure
        if (err) {
          res.sendStatus(400);
          res.json({ error: "something went wrong during uninstall process" });
        }
        //success
        res.sendStatus(200);
        res.json({ success: "something went wrong during uninstall process" });
      }
    );
  });
});

//Customer data request
router.get("/customers/data_request", function(req, res, next) {});

module.exports = router;