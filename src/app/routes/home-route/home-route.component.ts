import { Component, OnInit } from '@angular/core';
import { EventGridInfiniteComponent } from '../../event-grid-infinite';

@Component({
  moduleId: module.id,
  selector: 'app-home-route',
  templateUrl: 'home-route.component.html',
  styleUrls: ['home-route.component.css'],
  directives: [EventGridInfiniteComponent]
})
export class HomeRouteComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
