import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide, PLATFORM_PIPES, PLATFORM_DIRECTIVES } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/app.routes';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  appRouterProviders,
  provide(PLATFORM_DIRECTIVES,
    {
      useValue: [ROUTER_DIRECTIVES],
      multi: true
    })
]);
