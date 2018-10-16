export class vendorModel {
  _id:any;
  SHOP:string = "";
  PICKUP_NAME: string;
  PICKUP_ADDRESS_LINE1: string;
  PICKUP_ADDRESS_LINE2: string;
  PICKUP_PINCODE: string;
  PICKUP_PHONE: string;
  PICKUP_MOBILE: string;
  RETURN_NAME: string = "";
  RETURN_ADDRESS_LINE1: string = "";
  RETURN_ADDRESS_LINE2: string = "";
  RETURN_PINCODE: string = "";
  RETURN_PHONE: string = "";
  RETURN_MOBILE: string = "";
  DG_SHIPMENT: boolean = false;
  PACKING_TYPE: string = "";
  PICKUP_TYPE: string = "WH";
  RETURN_TYPE: string = "WH";
}
