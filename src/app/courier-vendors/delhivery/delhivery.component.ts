import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ICourier } from '../../models/ICourier';
import { courierDataModel } from '../../models/courier.model';
import { CourierType } from '../../models/enum';


@Component({
  selector: "app-delhivery",
  templateUrl: "./delhivery.component.html",
  styleUrls: ["./delhivery.component.css"]
})
export class DelhiveryComponent implements OnInit, ICourier {

  @Input() model: courierDataModel;
  @Output() dataChange = new EventEmitter();
  
  constructor() {
    
  }

  ngOnInit() {
    //this.model = new courierDataModel();
  }

  save() {
    this.model.courierType = CourierType.Delhivery;
    this.dataChange.emit(this.model);
  }
}
