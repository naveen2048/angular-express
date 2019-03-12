import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

if (top !== self) {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
} else {
  document.write('App opens as part of Shopify only. <a style="color:blue; text-decoration: underline;" href="https://www.shopify.com/login">Log in</a> to Shopify');
}


