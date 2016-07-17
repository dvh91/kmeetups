import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from './navbar';
import { EventGridComponent } from './event-grid';
import { EventGridInfiniteComponent } from './event-grid-infinite';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [NavbarComponent, EventGridComponent, EventGridInfiniteComponent]
})
export class AppComponent {
  events = [1,2,3,4];
}
