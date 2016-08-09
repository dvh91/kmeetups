import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { EventModel } from '../models/event';
import { EventGridComponent } from '../event-grid';

@Component({
  moduleId: module.id,
  selector: 'app-event-grid-infinite',
  templateUrl: 'event-grid-infinite.component.html',
  styleUrls: ['event-grid-infinite.component.css'],
  directives: [EventGridComponent]
})
export class EventGridInfiniteComponent implements OnInit {
  public events: Array<EventModel> = new Array();
  public total: number;
  public loading: boolean = true;
  private start: number = 0;
  private end: number = 6;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.getEvents(this.start, this.end);
  }

  getEvents(start: number, end: number) {
    if(this.start === 0) {
      this.loading = true;
    }
    this.eventsService.getEvents(start, end)
      .subscribe(res => {
        this.loading = false;
        this.events = this.events.concat(res.data.map(event => new EventModel(event)));
        this.total = parseInt(res.total);
      });
  }

  loadMore() {
    this.start = this.end;
    this.end = this.end + 2;
    this.getEvents(this.start, this.end);
  }

  canLoadMore() {
    return this.events.length < this.total;
  }
}
