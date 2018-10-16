import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { environment } from "../../environments/environment";
import { vendorModel } from '../models/vendor.model';

@Injectable()
export class CommonService {
  
  constructor(private http: HttpClient) {}

  getOrders(): Observable<any[]> {
    let uri = environment.ORDERS_URI;
    return this.http.get(uri).map((data: any) => <any[]>data.orders);
  }

  getVendors(): Observable<vendorModel[]> {
    return this.http.get(environment.VENDORS_URI_GET).map(data => <vendorModel[]>data);
  }

  saveVendor(vendor): Observable<vendorModel> {
    var headers = new HttpHeaders();
    headers.set('Content-type', 'application/x-www-form-urlencoded');

    return this.http
               .post(environment.VENDORS_URI_SAVE, JSON.stringify(vendor), { headers: headers })
               .map(data => <vendorModel>data);
  }

  getaccess(): any {
    this.http.get(environment.TOKEN).subscribe(data => {
      return data;
    });
  }
}
