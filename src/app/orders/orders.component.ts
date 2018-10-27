import { Component, OnInit } from "@angular/core";
import { CommonService } from "../services/common.service";
import { orderModel } from "../models/order.model";

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
  constructor(private orderService: CommonService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe(data => {
      this.Orders = <orderModel[]>data;
    });
  }

  process() {
    console.log(
      JSON.stringify(
        this.Orders.filter(a => a.billing_address.first_name == "Kaur")
      )
    );
  }

  orderSelected(order: any) {
    if (order.isSelected == false) {
      let _order = this.selectedOrders.findIndex(
        o => o.order_number == order.order_number
      );
      this.selectedOrders.splice(_order,1);
      console.log(this.selectedOrders);
    } else {
      this.selectedOrders.push(order);
      console.log(this.selectedOrders);
    }
  }
}
