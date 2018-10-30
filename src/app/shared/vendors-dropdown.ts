import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { CommonService } from "../services/common.service";

@Component({
  selector: "app-vendors-dropdown",
  template: `
    <select id="ddlCourier" name="ddlCourier" [(ngModel)]="selectedVendor" (change)="vendor()" placeholder="select courier"
        class="form-control" aria-invalid="false">
    <option *ngFor="let vendor of vendors" value="{{vendor._id}}">{{vendor.PICKUP_NAME}}</option>
    </select>
  `,
  styleUrls: []
})
export class VendorsDropdownComponent implements OnInit {
  
  @Input() selectedVendor:any;
  @Output() selectedVendorChange = new EventEmitter<any>();

  vendors: any[] = [];
  constructor(private vendorService: CommonService) {}

  ngOnInit() {
    this.vendors = this.vendorService.shop.vendors;
  }

  vendor() {
    this.selectedVendorChange.emit(this.vendors.filter(v => v._id == this.selectedVendor)[0]);
  }
}
