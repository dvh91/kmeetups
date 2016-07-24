import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-event-rsvp-toggle-btn',
  templateUrl: 'event-rsvp-toggle-btn.component.html',
  styleUrls: ['event-rsvp-toggle-btn.component.css'],
  inputs: ['rsvpState'],
  outputs: ['rsvpToggle']
})
export class EventRsvpToggleBtnComponent implements OnInit {
  rsvpToggle = new EventEmitter();
  rsvpState:boolean;

  constructor() {}

  ngOnInit() {
  }

  toggleRsvpState() {
    this.rsvpToggle.emit({});
  }

}
