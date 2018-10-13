import { Component } from '@angular/core';
import { OrderService } from './services/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private orderService: OrderService) {
    //Call this to ensure, we grab the token from DB for an existing client
    //let x = this.orderService.getaccess();
    //alert(x);
  }
}
