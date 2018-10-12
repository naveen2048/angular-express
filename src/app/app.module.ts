import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { DashobardComponent } from './dashobard/dashobard.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderService } from './services/order.service';
import { HttpClientModule } from '@angular/common/http';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'home', component:DashobardComponent},
  { path:'orders', component:OrdersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigationComponent,
    DashobardComponent,
    OrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
