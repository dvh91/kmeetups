import { Component, OnInit } from '@angular/core';
import { EventCardComponent } from '../event-card';

@Component({
  moduleId: module.id,
  selector: 'app-event-grid',
  templateUrl: 'event-grid.component.html',
  styleUrls: ['event-grid.component.css'],
  directives: [EventCardComponent]
})
export class EventGridComponent implements OnInit {

  events = [1,2,3,4];

  constructor() {}

  ngOnInit() {
  }

}
