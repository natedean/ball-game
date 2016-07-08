import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { RxTestsAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(RxTestsAppComponent);
