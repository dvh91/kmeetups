import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide, PLATFORM_PIPES, PLATFORM_DIRECTIVES } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { EventsService } from './app/services/events.service';
import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/app.routes';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  appRouterProviders,
  EventsService,
  provide(PLATFORM_DIRECTIVES,
    {
      useValue: [ROUTER_DIRECTIVES],
      multi: true
    })
]);
