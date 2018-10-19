import { Injectable, Type } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { environment } from "../../environments/environment";
import { vendorModel, courierDataModel } from '../models/index';


@Injectable()
export class CommonService {
  
  shop:string;
  constructor(private http: HttpClient) {}

  getOrders(): Observable<any[]> {
    let uri = environment.ORDERS_URI;
    return this.http.get(uri).map((data: any) => <any[]>data.orders);
  }

  getVendors(): Observable<vendorModel[]> {
    return this.http.get(environment.VENDORS_URI_GET).map(data => <vendorModel[]>data);
  }

  getVendor(id:any): Observable<vendorModel> {
    return this.http.get(environment.VENDORS_URI_SAVE + "/" + id).map(data => <vendorModel>data);
  }

  saveVendor(vendor): Observable<vendorModel> {
    var headers = new HttpHeaders();
    headers.set('Content-type', 'application/x-www-form-urlencoded');

    return this.http
               .post(environment.VENDORS_URI_SAVE, JSON.stringify(vendor), { headers: headers })
               .map(data => <vendorModel>data);
  }

  updateVendor(vendor:vendorModel) {
    var headers = new HttpHeaders();
    headers.set('Content-type', 'application/x-www-form-urlencoded');

    return this.http
               .put(environment.VENDORS_URI_SAVE + "/" + vendor._id,vendor, { headers: headers})
               .map(data => <vendorModel>data);
  }

  getaccess(): any {
    this.http.get(environment.TOKEN).subscribe(data => {
      return data;
    });
  }

  getShop() {
    this.http.get(environment.GET_SHOP_NAME).map(data => {
      this.shop = <any>data;
      console.log("Shop : " + this.shop);
    });
  }

  //Courier
  saveCourier(courier:courierDataModel) {
    var headers = new HttpHeaders();
    headers.set('Content-type', 'application/x-www-form-urlencoded');

    return this.http
               .post(environment.COURIER_URI_SAVE, JSON.stringify(courier), { headers: headers })
               .map(data => <courierDataModel>data);
  }

  //Get Courier by Shop:CourierType
  getCourier(shop:string): Observable<courierDataModel[]> {
    var headers = new HttpHeaders();
    headers.set('Content-type', 'application/x-www-form-urlencoded');

    return this.http
               .get(environment.COURIER_URI_SAVE + "/" + shop, { headers: headers })
               .map(data => <courierDataModel[]>data);
  }
}

export class courierItem {
  constructor(public component: Type<any>, public data: any, public courierType:string) {}
}
