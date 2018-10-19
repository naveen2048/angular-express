import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { courierDataModel } from '../../models/courier.model';

@Component({
  selector: "app-ecom",
  templateUrl: "./ecom.component.html",
  styleUrls: ["./ecom.component.css"]
})
export class EcomComponent implements OnInit {

  @Input() model : courierDataModel;
  
  @Output() dataChange = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.model = new courierDataModel();
  }

  save() {
    this.dataChange.emit(this.model);
  }
}
