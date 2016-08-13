import { Component, OnInit } from '@angular/core';
import { EventCardComponent } from '../event-card';

@Component({
  //moduleId: module.id,
  selector: 'app-event-grid',
  templateUrl: 'event-grid.component.html',
  styleUrls: ['event-grid.component.scss'],
  inputs: ['events'],
  directives: [EventCardComponent]
})
export class EventGridComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
