import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of' 

import { delhiveryModel } from '../models/delhivery.model';
import { aramaxCodModel } from '../models/aramax.cod.model';
import { aramaxPP } from '../models/aramax.pp.model';



@Injectable()
export class CourierDataProcessing {

    processForDelhivery(data:any[]): Observable<delhiveryModel[]> {
        let result: delhiveryModel[] = [];
        debugger;
        data.forEach(o => {
            result.push({
                "Order No": o.order.order_number,
                "Waybill": "",
                "Category of Goods":"",
                "Cod Amount": o.order.subtotal_price,
                "Commodity Value":"",
                "Consignee Name" : o.order.billing_address.first_name + " " + o.order.billing_address.last_name,
                "Consignee TIN":"",
                "Invoice No" : o.order.order_number,
                "Payment Amount": o.order.total_price,
                "Payment Mode": o.order.gateway,
                "Product Quantity": o.order.line_items.length,
                "Product to be shipped":"",
                "Return Address" : "",
                "Return Pin":0,
                "Sales Tax From ack no":"",
                "Seller Address":"",
                "Seller CST No": "",
                "Seller Inv Date":null,
                "Seller Name" : "Cignatek",
                "Seller TIN":"",
                "Tax Value":o.order.total_tax,
                "Address": o.order.billing_address.address1 + " " + o.order.billing_address.address2 || "",
                "City":"",
                "State":"",
                "Country":"",
                "Pincode":"",
                "Mobile":"",
                "Weight":0.5,
                "Length":1,
                "Breadth":1,
                "Height":1
            }); 
        });
        return of(result);
    }

    processAramaxCod(data:any) : aramaxCodModel[] {

        return data;
    }

    processAramaxPP(data:any): aramaxPP[] {
        
        return data;
    }
}