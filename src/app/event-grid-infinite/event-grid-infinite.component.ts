import 'rxjs/add/operator/let';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { getEventsSlugs } from '../reducers/events.reducer';
import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { EventModel } from '../models/event';
import { EventGridComponent } from '../event-grid';
import { GET_EVENTS, GET_EVENTS_SUCCESS, ADD_EVENTS, CHANGE_RSVP_STATE, UPDATE_TOTAL, GET_MORE_EVENTS, GET_MORE_EVENTS_SUCCESS } from '../reducers/events.reducer';

@Component({
  //moduleId: module.id,
  selector: 'app-event-grid-infinite',
  templateUrl: 'event-grid-infinite.component.html',
  styleUrls: ['event-grid-infinite.component.scss'],
  directives: [EventGridComponent]
})
export class EventGridInfiniteComponent implements OnInit {
  public events: Array<EventModel> = new Array();
  private total: number;
  public loading: boolean = true;
  public appendLoading: boolean = false;
  private start: number = 0;
  private end: number = 6;

  constructor(public store: Store<any>, private eventsService: EventsService) {
    store.select(s => s.events).subscribe(eventsState => {
      this.events = eventsState.events;
      this.loading = eventsState.loading;
      this.appendLoading = eventsState.appendLoading;
      this.total = eventsState.total;
    });
  }

  ngOnInit() {
    this.getEvents(this.start, this.end);
  }

  getEvents(start: number, end: number) {
    this.store.dispatch({ type: GET_EVENTS });
    this.eventsService.getEvents(start, end)
      .subscribe(res => {
        this.store.dispatch({ type: GET_EVENTS_SUCCESS });
        this.store.dispatch({ type: ADD_EVENTS, payload: res.data.map(event => new EventModel(event)) });
        this.store.dispatch({ type: UPDATE_TOTAL, payload: parseInt(res.total) });
      });
  }

  loadMore(eventsToAdd:number) {
    this.store.dispatch({ type: GET_MORE_EVENTS });
    this.start = this.end;
    this.end = this.end + eventsToAdd;
    this.eventsService.getEvents(this.start, this.end)
      .subscribe(res => {
        this.store.dispatch({ type: GET_MORE_EVENTS_SUCCESS });
        this.store.dispatch({ type: ADD_EVENTS, payload: res.data.map(event => new EventModel(event)) });
        this.store.dispatch({ type: UPDATE_TOTAL, payload: parseInt(res.total) });
      });
  }

  canLoadMore() {
    return this.events.length < this.total;
  }

  changeRsvpState() {
    this.store.dispatch({ type: CHANGE_RSVP_STATE });
  }
}
