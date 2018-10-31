import { Component, OnInit } from "@angular/core";
import { CommonService } from "../services/common.service";
import { orderModel } from "../models/order.model";
import { CourierDataProcessing } from "../utilities/courier.data.processing";
import { CourierType } from "../models";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"]
})
export class OrdersComponent implements OnInit {
  showDetails: boolean = false;
  searchText: string;
  Orders: any[];
  selectedOrders: any[] = [];
  constructor(
    private orderService: CommonService,
    private utilityService: CourierDataProcessing
  ) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe(data => {
      this.Orders = <orderModel[]>data;
    });
  }

  process() {
    let data = this.selectedOrders.filter(
      e => e.courier.courierType == CourierType.Delhivery && e.isSelected == true
    );
    this.utilityService
        .processForDelhivery(data)
        .subscribe(d => console.log(d));
  }

  orderSelected(order: any) {
    if (order.isSelected == false) {
      let _order = this.selectedOrders.findIndex(
        o => o.order_number == order.order_number
      );
      this.selectedOrders.splice(_order, 1);
      console.log(this.selectedOrders);
    } else {
      this.selectedOrders.push(order);
      console.log(this.selectedOrders);
    }
  }
}
