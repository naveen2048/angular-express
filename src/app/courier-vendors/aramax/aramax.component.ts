import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { courierDataModel } from '../../models/courier.model';
import { ICourier } from '../../models/ICourier';

@Component({
  selector: 'app-aramax',
  templateUrl: './aramax.component.html',
  styleUrls: ['./aramax.component.css']
})
export class AramaxComponent implements OnInit, ICourier {

  model = new courierDataModel();

  @Output() dataChange = new EventEmitter();
  
  constructor() {}

  ngOnInit() {}

  save() {
    this.dataChange.emit(this.model);
  }
}
