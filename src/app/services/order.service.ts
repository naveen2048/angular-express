import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';


Injectable()
export class OrderService {

    //private uri: string ="httpsmnk-angular-express.herokuapp.com";
    constructor(private http:HttpClient){}

    getOrders(): Observable<any[]>{
        let uri = environment.ORDERS_URI;
        return this.http
                   .get(uri)
                   .map((data:any) => <any[]>data.orders);
    }
}