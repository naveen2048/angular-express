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
    this.vendors = this.vendorService.shop.vendors;
  }

  newVendor() {
    this.showNewVendorForm = !this.showNewVendorForm;
  }

  saveVendor() {
    //Update
    if(this.vendor._id && this.vendor._id != ""){
      this.vendorService
          .updateVendor(this.vendor)
          .subscribe(data => {
              console.log(data)
          });
    } else{ //New
    this.vendor.SHOP = this.vendorService.shop.store;
    this.vendorService
      .saveVendor(this.vendor)
      .subscribe(vendor => {
        this.vendors.push(vendor);
        this.cancel();
      });
    }
  }

  editVendor(id) {
    this.vendor = this.vendorService.shop.vendors.find(v => v._id == id);
    this.cancel();
  }

  cancel() {
    this.showNewVendorForm = !this.showNewVendorForm;
  }
}
