import { Component, OnInit } from '@angular/core';
import { EventGridComponent } from '../event-grid';
import { EventModel } from '../models/event';

var e1 = new EventModel({
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
    rsvpState: true,
    total: 10,
    trend: 0,
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

var e2 = new EventModel({
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
    rsvpState: true,
    total: 10,
    trend: 0,
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

var e3 = new EventModel({
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
    rsvpState: true,
    total: 10,
    trend: 0,
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

var e4 = new EventModel({
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
    rsvpState: true,
    total: 10,
    trend: 0,
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
    this.events.push(e1);
    this.events.push(e2);
    this.events.push(e3);
    this.events.push(e4);
  }

  ngOnInit() {
  }

  loadMore() {
    this.events.push(new EventModel({
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
        rsvpState: true,
        total: 10,
        trend: 0,
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
    }));
    this.events.push(new EventModel({
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
        rsvpState: true,
        total: 10,
        trend: 0,
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
    }));
  }

}
