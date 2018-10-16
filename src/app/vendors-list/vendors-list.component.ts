import { Component, OnInit } from "@angular/core";
import { CommonService } from "../services/common.service";
import { vendorModel } from "../models/vendor.model";

@Component({
  selector: "app-vendors-list",
  templateUrl: "./vendors-list.component.html",
  styleUrls: ["./vendors-list.component.css"]
})
export class VendorsListComponent implements OnInit {
  vendors: vendorModel[];
  vendor: vendorModel = new vendorModel();
  showNewVendorForm: boolean = false;

  constructor(private vendorService: CommonService) {}

  ngOnInit() {
    this.vendorService.getVendors().subscribe(data => {
      this.vendors = data;
    });
  }

  newVendor() {
    this.showNewVendorForm = !this.showNewVendorForm;
  }

  saveVendor() {
    this.vendorService
      .saveVendor(this.vendor)
      .subscribe(vendor => {
        this.vendors.push(vendor);
        this.vendor = new vendorModel();
        this.cancel();
      });
  }

  cancel() {
    this.showNewVendorForm = !this.showNewVendorForm;
  }
}
