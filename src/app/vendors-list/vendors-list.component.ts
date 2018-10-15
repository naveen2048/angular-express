import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrls: ['./vendors-list.component.css']
})
export class VendorsListComponent implements OnInit {
  vendors: any[];
  showNewVendorForm:boolean = false;
  newButton:string = "Add New";

  constructor(private vendorService: CommonService) { }

  ngOnInit() {
    this.vendorService.getVendors().subscribe(data => {
      debugger;
      this.vendors = data;
    });
  }

  newVendor() {
    this.showNewVendorForm = !this.showNewVendorForm;
    this.newButton = "Save";
  }

  saveVendor(){
    
  }

  cancel(){
    this.showNewVendorForm = !this.showNewVendorForm;
  }

}
