import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { App1Module } from './app1/app1.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule) //error happen because of this code
  .catch(err => console.error(err));
  platformBrowserDynamic().bootstrapModule(App1Module)
  .catch(err => console.error(err));
