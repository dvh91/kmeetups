import { Component, OnInit } from '@angular/core';
import { EventGridComponent } from '../event-grid';
import { EventModel } from '../models/event';

var sampleEvent = new EventModel({
  title: 'Angular 2',
  description: 'intro to Angular 2',
  group: {
    slug: 'angular-js',
    name: 'kNG2',
    createdOn: 123
  },
  location: 'Conf-TLV',
  createdOn: 123,
  organizer: {
    firstName: 'dvir',
    lastName: 'hazout',
    email: 'dvir.hazut@kaltura.com'
  },
  startTime: 123,
  endTime: 123,
  attending: {
    total: 10,
    users: [{
      firstName: 'dvir',
      lastName: 'hazout',
      email: 'dvir.hazut@kaltura.com'
    },
    {
      firstName: 'dvir',
      lastName: 'hazout',
      email: 'dvir.hazut@kaltura.com'
    }]
  }
});

@Component({
  moduleId: module.id,
  selector: 'app-event-grid-infinite',
  templateUrl: 'event-grid-infinite.component.html',
  styleUrls: ['event-grid-infinite.component.css'],
  directives: [EventGridComponent]
})
export class EventGridInfiniteComponent implements OnInit {
  events: Array<EventModel> = new Array();

  constructor() {
    this.events.push(sampleEvent);
    this.events.push(sampleEvent);
    this.events.push(sampleEvent);
    this.events.push(sampleEvent);
  }

  ngOnInit() {
  }

  loadMore() {
    this.events.push(sampleEvent);
    this.events.push(sampleEvent);
  }

}
