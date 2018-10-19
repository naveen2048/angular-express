import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { courierDataModel } from '../../models/courier.model';
import { ICourier } from '../../models/ICourier';

@Component({
  selector: 'app-aramax',
  templateUrl: './aramax.component.html',
  styleUrls: ['./aramax.component.css']
})
export class AramaxComponent implements OnInit, ICourier {

  @Input() model:courierDataModel;

  @Output() dataChange = new EventEmitter();
  
  constructor() {}

  ngOnInit() {
    this.model = new courierDataModel();
  }

  save() {
    this.dataChange.emit(this.model);
  }
}
