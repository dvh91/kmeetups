import { Component, OnInit } from '@angular/core';
import { EventRsvpToggleBtnComponent } from '../event-rsvp-toggle-btn';
import { EventAttendingTrendCounterComponent } from '../event-attending-trend-counter';

@Component({
  moduleId: module.id,
  selector: 'app-event-card',
  templateUrl: 'event-card.component.html',
  styleUrls: ['event-card.component.css'],
  inputs: ['event'],
  directives: [EventRsvpToggleBtnComponent, EventAttendingTrendCounterComponent]
})
export class EventCardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
