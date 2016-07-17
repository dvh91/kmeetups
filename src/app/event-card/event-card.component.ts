import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-event-card',
  templateUrl: 'event-card.component.html',
  styleUrls: ['event-card.component.css'],
  inputs: ['event']
})
export class EventCardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
