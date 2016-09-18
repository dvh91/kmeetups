import { Component, OnInit } from '@angular/core';
import { EventCardComponent } from '../event-card';

@Component({

  selector: 'app-event-grid',
  templateUrl: 'event-grid.component.html',
  styleUrls: ['event-grid.component.scss'],
  inputs: ['events']
})
export class EventGridComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
