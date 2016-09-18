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
import { NavbarComponent } from './navbar/navbar.component';
import { HomeRouteComponent } from './routes/home-route/home-route.component';
import { EventRouteComponent } from './routes/event-route/event-route.component';
import { LoginRouteComponent } from './routes/login-route/login-route.component';
import { EventGridInfiniteComponent } from './event-grid-infinite/event-grid-infinite.component';
import { EventGridComponent } from './event-grid/event-grid.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventAttendingTrendCounterComponent } from './event-attending-trend-counter/event-attending-trend-counter.component';
import { EventRsvpToggleBtnComponent } from './event-rsvp-toggle-btn/event-rsvp-toggle-btn.component';

import { EventsEffects } from './effects/events.effects';
import { eventsReducer } from './reducers/events.reducer';
import { routes } from './app.routes';
import { EventsService } from './services/events.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeRouteComponent,
    EventRouteComponent,
    LoginRouteComponent,
    EventGridInfiniteComponent,
    EventGridComponent,
    EventCardComponent,
    EventAttendingTrendCounterComponent,
    EventRsvpToggleBtnComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    EffectsModule.run(EventsEffects)
  ],
  providers: [
    provideStore({ events: eventsReducer }),
    instrumentStore(),
    EventsService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
