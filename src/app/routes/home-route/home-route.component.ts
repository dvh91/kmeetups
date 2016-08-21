import { Component, OnInit } from '@angular/core';
import { EventGridInfiniteComponent } from '../../event-grid-infinite';

@Component({
  
  selector: 'app-home-route',
  templateUrl: 'home-route.component.html',
  styleUrls: ['home-route.component.scss'],
  directives: [EventGridInfiniteComponent]
})
export class HomeRouteComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
