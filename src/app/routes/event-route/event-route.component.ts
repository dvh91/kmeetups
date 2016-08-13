import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { EventModel } from '../../models/event';

@Component({
  //moduleId: module.id,
  selector: 'app-event-route',
  templateUrl: 'event-route.component.html',
  styleUrls: ['event-route.component.scss']
})
export class EventRouteComponent implements OnInit {

  event: EventModel;

  constructor(private route: ActivatedRoute, private eventsService: EventsService) {}

  ngOnInit() {
    this.route.params
      .map(params => params['slug'])
      .subscribe((slug) => {
        this.eventsService
          .getSingleEventBySlug(slug)
          .subscribe(event => this.event = event);
      });
  }

}
