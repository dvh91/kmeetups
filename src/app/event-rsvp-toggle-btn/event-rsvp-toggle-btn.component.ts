import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-event-rsvp-toggle-btn',
  templateUrl: 'event-rsvp-toggle-btn.component.html',
  styleUrls: ['event-rsvp-toggle-btn.component.css']
})
export class EventRsvpToggleBtnComponent implements OnInit {
  rsvpState:boolean = false;

  constructor() {}

  ngOnInit() {
  }

  toggleRsvpState() {
    this.rsvpState = !this.rsvpState;
  }

}
