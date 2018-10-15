import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  showDetails:boolean = false;
  searchText:string;
  Orders:any[];
  constructor(private orderService:CommonService) { }

  ngOnInit() {
    this.orderService
        .getOrders()
        .subscribe(data => this.Orders = data);
  }

}
