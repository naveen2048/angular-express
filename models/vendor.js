// get an instance of mongoose and mongoose.Schema
var mongojs = require('mongojs');
var Schema = mongojs.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongojs.model('vendors', new Schema({ 
  PICKUP_NAME: String,
  PICKUP_ADDRESS_LINE1: String,
  PICKUP_ADDRESS_LINE2: String,
  PICKUP_PINCODE: String,
  PICKUP_PHONE: String,
  PICKUP_MOBILE: String,
  RETURN_NAME: String = this.PICKUP_NAME,
  RETURN_ADDRESS_LINE1: String = this.PICKUP_ADDRESS_LINE1,
  RETURN_ADDRESS_LINE2: String = this.PICKUP_ADDRESS_LINE2,
  RETURN_PINCODE: String = this.PICKUP_PINCODE,
  RETURN_PHONE: String = this.PICKUP_PHONE,
  RETURN_MOBILE: String = this.PICKUP_MOBILE,
  DG_SHIPMENT: Boolean = false,
  PACKING_TYPE: String,
  PICKUP_TYPE: String = "WH",
  RETURN_TYPE: String = "WH",
}));