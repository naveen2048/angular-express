import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { courierDataModel } from '../../models/courier.model';
import { ICourier } from '../../models/ICourier';

@Component({
  selector: "app-ecom",
  templateUrl: "./ecom.component.html",
  styleUrls: ["./ecom.component.css"]
})
export class EcomComponent implements OnInit, ICourier {

  @Input() model : courierDataModel;
  
  @Output() dataChange = new EventEmitter();

  constructor() {}

  ngOnInit() {
    //this.model = new courierDataModel();
  }

  save() {
    this.dataChange.emit(this.model);
  }
}
