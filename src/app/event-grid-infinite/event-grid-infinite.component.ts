import { Component, OnInit } from '@angular/core';
import { EventGridComponent } from '../event-grid';
import { EventModel } from '../models/event';

var sampleEvent = new EventModel({
  title: 'Angular 2 - ngrx essentials',
  slug: 'angular-2-ngrx-essentials',
  description: 'Angular2 ngrx intro - workshop about implementing ngrx, the redux implementaion in Angular2 - Store, time travaller, dispacher and more',
  group: {
    slug: 'angular-js',
    name: 'kNG2',
    createdOn: 1468431000
  },
  location: 'Conf-TLV',
  createdOn: 1468431000,
  organizer: {
    firstName: 'dvir',
    lastName: 'hazout',
    email: 'dvir.hazut@kaltura.com'
  },
  startTime: 1468431000,
  endTime: 1468431000,
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
