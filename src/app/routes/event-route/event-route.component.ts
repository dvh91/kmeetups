import '@ngrx/core/add/operator/select';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { EventModel } from '../../models/event';
import { getSingleEventBySlug } from '../../reducers/events.reducer';
import * as eventsActions from '../../actions/events.actions';

@Component({

  selector: 'app-event-route',
  templateUrl: 'event-route.component.html',
  styleUrls: ['event-route.component.scss']
})
export class EventRouteComponent implements OnInit {

  event: EventModel;

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
    private eventsService: EventsService
  ) {}

  ngOnInit() {
    this.route.params
      .map(params => params['slug'])
      .subscribe((slug) => {
        this.store.let(getSingleEventBySlug(slug))
          .subscribe(event => this.event = event);
      });
  }

  rsvpToggle() {
    this.store.dispatch(eventsActions.changeRsvpState(true));
  }

}
