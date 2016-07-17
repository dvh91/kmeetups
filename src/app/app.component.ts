import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from './navbar';
import { EventGridComponent } from './event-grid';
import { EventGridInfiniteComponent } from './event-grid-infinite';

import { EventModel } from './models/event';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [NavbarComponent, EventGridComponent, EventGridInfiniteComponent]
})
export class AppComponent {
  events: Array<EventModel> = new Array();
  constructor() {
    let sampleEvent = new EventModel({
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
    this.events.push(sampleEvent);
  }
}
