import { Component, OnInit } from '@angular/core';
import { EventRsvpToggleBtnComponent } from '../event-rsvp-toggle-btn';
import { EventAttendingTrendCounterComponent } from '../event-attending-trend-counter';
import { EventModel } from '../models/event';

@Component({
  //moduleId: module.id,
  selector: 'app-event-card',
  templateUrl: 'event-card.component.html',
  styleUrls: ['event-card.component.scss'],
  inputs: ['event'],
  outputs: ['rsvpToggle'],
  directives: [EventRsvpToggleBtnComponent, EventAttendingTrendCounterComponent]
})
export class EventCardComponent implements OnInit {
  event: EventModel;

  constructor() {}

  ngOnInit() {
  }

  rsvpToggle(event) {
    if(this.event.attending.rsvpState) {
      this.event.attending.total--;
    }
    else {
      this.event.attending.total++;
    }
    this.event.attending.rsvpState = !this.event.attending.rsvpState;
  }

}
