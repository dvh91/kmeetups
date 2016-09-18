import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventGridInfiniteComponent } from './components/event-grid-infinite/event-grid-infinite.component';
import { EventGridComponent } from './components/event-grid/event-grid.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventAttendingTrendCounterComponent } from './components/event-attending-trend-counter/event-attending-trend-counter.component';
import { EventRsvpToggleBtnComponent } from './components/event-rsvp-toggle-btn/event-rsvp-toggle-btn.component';

import { EventsEffects } from '../state/events/events.effects';
import { EventsService } from './services/events.service';

@NgModule({
  declarations: [
    EventGridInfiniteComponent,
    EventGridComponent,
    EventCardComponent,
    EventAttendingTrendCounterComponent,
    EventRsvpToggleBtnComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    EventGridInfiniteComponent,
    EventRsvpToggleBtnComponent,
    EventAttendingTrendCounterComponent
  ],
  providers: [
    EventsService
  ]
})
export class EventsModule {

}
