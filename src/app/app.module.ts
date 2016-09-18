import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { instrumentStore } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeRouteComponent } from './events/routes/home-route/home-route.component';
import { EventRouteComponent } from './events/routes/event-route/event-route.component';
import { LoginRouteComponent } from './auth/routes/login-route/login-route.component';

import { EventsModule } from './events/events.module';
import { AuthModule } from './auth/auth.module';

import { EventsEffects } from './state/events/events.effects';
import { eventsReducer } from './state/events/events.reducer';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeRouteComponent,
    EventRouteComponent,
    LoginRouteComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    EffectsModule.run(EventsEffects),

    EventsModule,
    AuthModule
  ],
  providers: [
    provideStore({ events: eventsReducer }),
    instrumentStore()
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
