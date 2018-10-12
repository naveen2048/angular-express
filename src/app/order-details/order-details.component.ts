import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Input() order:any;
  selectedCourier:string = "";
  selectedVendor:string = "";
  gateway:string;

  showDetails:boolean = false;
  constructor() { }

  ngOnInit() { 
    this.gateway = this.order.gateway
  }

  toggle() {
    this.showDetails = !this.showDetails;
  }
}
