import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderNavigationComponent } from "./header-navigation/header-navigation.component";
import { DashobardComponent } from "./dashobard/dashobard.component";
import { OrdersComponent } from "./orders/orders.component";
import { HttpClientModule } from "@angular/common/http";
import { OrderDetailsComponent } from "./order-details/order-details.component";
import { FilterPipe } from "./shared/filter";
import { SpinnerComponent } from "./shared/spinner";
import { VendorsDropdownComponent } from "./shared/vendors-dropdown";
import { CommonService } from "./services/common.service";
import { VendorsListComponent } from "./vendors-list/vendors-list.component";
import { EcomComponent } from "./courier-vendors/ecom/ecom.component";
import { DelhiveryComponent } from "./courier-vendors/delhivery/delhivery.component";
import { CourierVendorsComponent } from "./courier-vendors/courier-vendors";

//3rd Party library
import { TabModule } from "angular-tabs-component";
import { CourierDirective } from "./shared/component-loader-directive";
import { AramaxComponent } from "./courier-vendors/aramax/aramax.component";
import { ImageComponent } from "./shared/image-component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: DashobardComponent },
  { path: "orders", component: OrdersComponent },
  { path: "vendors", component: VendorsListComponent },
  { path: "couriers", component: CourierVendorsComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigationComponent,
    DashobardComponent,
    OrdersComponent,
    OrderDetailsComponent,
    FilterPipe,
    SpinnerComponent,
    VendorsDropdownComponent,
    VendorsListComponent,
    EcomComponent,
    DelhiveryComponent,
    CourierVendorsComponent,
    CourierDirective,
    AramaxComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TabModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
  entryComponents: [DelhiveryComponent, EcomComponent, AramaxComponent]
})
export class AppModule {}
