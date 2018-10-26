import { Component, OnInit, Input } from '@angular/core';
import { courierDataModel } from '../models/courier.model';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Input() order:any;
  selectedCourier:string = "";
  selectedVendor:string = "";
  selectedForProcessing:boolean;
  gateway:string;
  couriers:courierDataModel[];
  awbNumber:string = "---";

  showDetails:boolean = false;
  constructor(private orderService:CommonService) { }

  ngOnInit() { 
    this.gateway = this.order.gateway
    this.couriers = this.orderService.shop.couriers;
    //TODO: include select at index = 0
    //push select at index =0
  }

  toggle() {
    this.showDetails = !this.showDetails;
  }

}
