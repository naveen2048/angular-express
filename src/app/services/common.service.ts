import { Injectable, Type } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import "rxjs/add/operator/map";
import { environment } from "../../environments/environment";
import { vendorModel, courierDataModel } from "../models/index";
import { IStore } from "../models/store.model";
import { orderModel } from '../models/order.model';
import { Deserializable } from '../models/deserializable.model';

@Injectable()
export class CommonService {
  public shop: IStore;
  constructor(private http: HttpClient) {}

  getOrders(): Observable<orderModel[]> {
    let _orders: orderModel[];

    let uri = environment.ORDERS_URI;
    return this.http
      .get<orderModel[]>(uri)
      .map((data: any) => <orderModel[]>data.orders);
      // .map((data: any) => <orderModel[]>data.orders.map(order => {
      //   new orderModel().deserialize(order);
      // }));
    //.map((data: any) => <orderModel[]>data.orders);
    //.map((res: any) => new orderModel().deserialize(res)));
  }

  getVendors(shop: string) {
    this.http.get(environment.VENDORS_URI_GET + "/" + shop).subscribe(data => {
      this.shop.vendors = <vendorModel[]>data;
    });
  }

  getVendor(id: any): Observable<vendorModel> {
    return this.http
      .get(environment.VENDORS_URI_SAVE + "/" + id)
      .map(data => <vendorModel>data);
  }

  saveVendor(vendor): Observable<vendorModel> {
    var headers = new HttpHeaders();
    headers.set("Content-type", "application/x-www-form-urlencoded");

    return this.http
      .post(environment.VENDORS_URI_SAVE, JSON.stringify(vendor), {
        headers: headers
      })
      .map(data => <vendorModel>data);
  }

  updateVendor(vendor: vendorModel) {
    var headers = new HttpHeaders();
    headers.set("Content-type", "application/x-www-form-urlencoded");

    return this.http
      .put(environment.VENDORS_URI_SAVE + "/" + vendor._id, vendor, {
        headers: headers
      })
      .map(data => <vendorModel>data);
  }

  getaccess(): any {
    this.http.get(environment.TOKEN).subscribe(data => {
      return data;
    });
  }

  getShop() {
    this.http.get(environment.GET_SHOP_NAME).subscribe(data => {
      this.shop = <IStore>data;
      //Get All Courier related to store
      this.getCourier(this.shop.store);
      this.getVendors(this.shop.store);
    });
  }

  //Courier
  saveCourier(courier: courierDataModel) {
    var headers = new HttpHeaders();
    headers.set("Content-type", "application/x-www-form-urlencoded");

    return this.http
      .post(environment.COURIER_URI_SAVE, JSON.stringify(courier), {
        headers: headers
      })
      .map(data => <courierDataModel>data);
  }

  //Get Courier by Shop:CourierType
  getCourier(shop: string) {
    var headers = new HttpHeaders();
    headers.set("Content-type", "application/x-www-form-urlencoded");

    this.http
      .get(environment.COURIER_URI_GET + "/" + shop, { headers: headers })
      .subscribe(data => {
        this.shop.couriers = <courierDataModel[]>data;
      });
  }
}

export class courierItem {
  constructor(
    public component: Type<any>,
    public data: any,
    public courierType: string
  ) {}
}
