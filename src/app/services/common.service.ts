import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { environment } from "../../environments/environment";

@Injectable()
export class CommonService {
  
  constructor(private http: HttpClient) {}

  getOrders(): Observable<any[]> {
    let uri = environment.ORDERS_URI;
    return this.http.get(uri).map((data: any) => <any[]>data.orders);
  }

  getVendors(): Observable<any> {
    return this.http.get(environment.VENDORS_URI).map(data => <any>data);
  }

  getaccess(): any {
    this.http.get(environment.TOKEN).subscribe(data => {
      return data;
    });
  }
}