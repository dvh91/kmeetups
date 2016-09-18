import 'rxjs/add/operator/let';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { EventModel } from '../models/event';
import { EventGridComponent } from '../event-grid';
import * as eventsActions from '../actions/events.actions';

@Component({

  selector: 'app-event-grid-infinite',
  templateUrl: 'event-grid-infinite.component.html',
  styleUrls: ['event-grid-infinite.component.scss']
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
    this.store.dispatch(eventsActions.getEvents());
    this.eventsService.getEvents(start, end)
      .subscribe(res => {
        let mappedEvents = res.data.map(event => new EventModel(event));
        let total = parseInt(res.total);
        this.store.dispatch(eventsActions.getEventsSuccess());
        this.store.dispatch(eventsActions.addEvents(mappedEvents));
        this.store.dispatch(eventsActions.updateTotal(total));
      });
  }

  loadMore(eventsToAdd:number) {
    this.store.dispatch(eventsActions.getMoreEvents());

    this.start = this.end;
    this.end = this.end + eventsToAdd;
    this.eventsService.getEvents(this.start, this.end)
      .subscribe(res => {
        let mappedEvents = res.data.map(event => new EventModel(event));
        let total = parseInt(res.total);
        this.store.dispatch(eventsActions.getMoreEventsSuccess());
        this.store.dispatch(eventsActions.addEvents(mappedEvents));
        this.store.dispatch(eventsActions.updateTotal(total));
      });
  }

  canLoadMore() {
    return this.events.length < this.total;
  }

  changeRsvpState() {
    this.store.dispatch(eventsActions.changeRsvpState(true));
  }
}
