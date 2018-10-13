import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of'


Injectable()
export class OrderService {
    //TODO: This needs to come from MongoDB
    //For now testing purpose only
    vendors:any[] = [{ ID: 1, PICKUP_NAME:"Vendor 1"}, { ID: 2, PICKUP_NAME:"Vendor 2"}];

    //private uri: string ="httpsmnk-angular-express.herokuapp.com";
    constructor(private http:HttpClient){}

    getOrders(): Observable<any[]>{
        let uri = environment.ORDERS_URI;
        return this.http
                   .get(uri)
                   .map((data:any) => <any[]>data.orders);
    }

    getVendors(): Observable<any> {
        return of(this.vendors);
    }

    getaccess(): any {
        this.http.get(environment.TOKEN).subscribe(data => {
            return data;
        });
    }
}