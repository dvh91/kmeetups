import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EventRsvpToggleBtnComponent } from '../event-rsvp-toggle-btn';
import { EventAttendingTrendCounterComponent } from '../event-attending-trend-counter';
import { EventModel } from '../models/event';
import * as eventsActions from '../actions/events.actions';

@Component({

  selector: 'app-event-card',
  templateUrl: 'event-card.component.html',
  styleUrls: ['event-card.component.scss'],
  inputs: ['event'],
  directives: [EventRsvpToggleBtnComponent, EventAttendingTrendCounterComponent]
})
export class EventCardComponent implements OnInit {
  event: EventModel;

  constructor(public store: Store<any>) {}

  ngOnInit() {
  }

  rsvpToggle(event) {
    this.store.dispatch(eventsActions.changeRsvpState(true));
  }

}
