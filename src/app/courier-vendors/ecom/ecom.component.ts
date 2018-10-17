import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { courierDataModel } from "../../models/courier.model";

@Component({
  selector: "app-ecom",
  templateUrl: "./ecom.component.html",
  styleUrls: ["./ecom.component.css"]
})
export class EcomComponent implements OnInit {
  model = new courierDataModel();

  @Output()
  dataChange = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  save() {
    this.dataChange.emit(this.model);
  }
}
