import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

Injectable()
export class OrderService {

    constructor(private http:HttpClient){}

    getOrders(): Observable<any>{
        return this.http
                   .get("https://jsonplaceholder.typicode.com/todos")
                   .map(data => <any>data);
    }
}