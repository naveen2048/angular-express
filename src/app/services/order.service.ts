import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

Injectable()
export class OrderService {

    //private uri: string ="httpsmnk-angular-express.herokuapp.com";
    constructor(private http:HttpClient){}

    getOrders(): Observable<any[]>{
        return this.http
                   .get(environment.ORDERS_URI)
                   .map((data:any) => <any[]>data.orders);
    }
}