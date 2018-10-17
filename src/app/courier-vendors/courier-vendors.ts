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
import { CourierType } from "../models";
import { ICourier } from '../models/ICourier';

@Component({
  template: `
  <app-spinner [showSpinner]="!couriers"></app-spinner>
  <div class="Polaris-Card" *ngIf="couriers">
  <div class="Polaris-Card__Section">
    <div class="Polaris-Stack Polaris-Stack--vertical">
      <div class="Polaris-Stack__Item">
        <button type="button" (click)="loadComponent(1)" class="Polaris-Button Polaris-Button--primary">
          <span class="Polaris-Button__Content"><span>Delhivery</span>
          </span>
        </button>
        <button type="button" (click)="loadComponent(2)"  class="Polaris-Button Polaris-Button--primary">
          <span class="Polaris-Button__Content"><span>Ecom</span>
          </span>
        </button>
        <button type="button" (click)="loadComponent(3)"  class="Polaris-Button Polaris-Button--primary">
          <span class="Polaris-Button__Content"><span>Aramax</span>
          </span>
        </button>
      </div>
          </div>
        </div>
      </div>
      <hr *ngIf="couriers" />
      <div class="Polaris-Card" *ngIf="couriers">
      <div class="Polaris-Card__Section">
        <div class="Polaris-Stack Polaris-Stack--vertical">
          <div class="Polaris-Stack__Item">
          <ng-template courier-host></ng-template> 
          </div>
          </div>
        </div>
     </div>`,
  styleUrls: []
})
export class CourierVendorsComponent implements OnInit {

  @ViewChild(CourierDirective) courierHost: CourierDirective;

  couriers:courierDataModel[];

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
    (<ICourier>courierComponent.instance).model = this.couriers.find(c => c.courierType == _courier.courierType);

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
