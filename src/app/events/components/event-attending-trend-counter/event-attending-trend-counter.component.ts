import { Component, OnInit } from '@angular/core';

@Component({
  
  selector: 'app-event-attending-trend-counter',
  templateUrl: 'event-attending-trend-counter.component.html',
  styleUrls: ['event-attending-trend-counter.component.scss'],
  inputs: ['trend', 'attendersCount']
})
export class EventAttendingTrendCounterComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
