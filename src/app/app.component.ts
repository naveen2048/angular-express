import { Component, OnInit, Inject } from "@angular/core";
import { CommonService } from "./services/common.service";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  isShop:boolean = false;

  constructor(private service: CommonService, @Inject(DOCUMENT) private document:any) {
    //if this condition fails, it would redirect to shopify account store
    this.loadedIniFrame();

    this.service.getShop();
    this.isShop = this.service.shop.store == "" ? false : true;
  }

  ngOnInit() {
    
  }

  //Check to see if its loaded in iFrame, take appropriate action
  loadedIniFrame() {
    if(top === self)
    {
      //redirect the user to shopify store
      // this app cannot load outside shopify
      this.document.location.href = "https://accounts.shopify.com/";
    }
  }
}
