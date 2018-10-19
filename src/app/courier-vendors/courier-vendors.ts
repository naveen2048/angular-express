import {
  Component,
  Directive,
  ViewChild,
  ComponentFactoryResolver
} from "@angular/core";
import { CourierDirective } from "../shared/component-loader-directive";
import { OnInit } from "@angular/core";
import { courierItem, CommonService } from "../services/common.service";
import { DelhiveryComponent } from "./delhivery/delhivery.component";
import { EcomComponent } from "./ecom/ecom.component";
import { AramaxComponent } from './aramax/aramax.component';
import { courierDataModel } from '../models/courier.model';
import { CourierType, ImageSize } from "../models";
import { ICourier } from '../models/ICourier';

@Component({
  templateUrl:'courier-vendors.html',
  styleUrls: ['./courier-vendors.css']
})
export class CourierVendorsComponent implements OnInit {

  @ViewChild(CourierDirective) courierHost: CourierDirective;
  
  couriers:courierDataModel[];
  imageName:string;
  imageSize:string = ImageSize.Medium;

  dynamicComponent: courierItem[] = [
    new courierItem(DelhiveryComponent, 1, CourierType.Delhivery),
    new courierItem(EcomComponent, 2, CourierType.Ecom),
    new courierItem(AramaxComponent,3, CourierType.Aramax)
  ];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private courierService: CommonService
  ) {}

  ngOnInit() {
    this.loadCouriersForShop();
  }

  loadCouriersForShop() {
    //ToDo: This needs to be read from IFrame of shopify, which it pass back to the app
    // for testing "zinnga" is hardcoded
    this.courierService
        .getCourier("zinnga") //remove before deploying
        .subscribe(data => {
          this.couriers = data;
          //Initial load, ensure Delhivery is loaded
          //this.loadComponent(1);
        });
  }

  loadComponent(index: number) {
    var _courier = this.dynamicComponent.find(c => c.data == index);

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      _courier.component
    );

    let viewContainerRef = this.courierHost.viewContainerRef;
    viewContainerRef.clear();

    let courierComponent = viewContainerRef.createComponent(componentFactory);

    //input data to the dynamic component
    let selectedCourier = this.couriers.find(c => c.courierType == _courier.courierType);
    (<ICourier>courierComponent.instance).model = selectedCourier; 
    
    //set the image for the selected courier vendor
    this.imageName = _courier.courierType.toLocaleLowerCase();

    courierComponent.instance.dataChange.subscribe(data => {
      this.saveChange(data);
    });
  }

  saveChange(data: any) {
    this.courierService
        .saveCourier(data)
        .subscribe(data => console.log(data));
  }
}
