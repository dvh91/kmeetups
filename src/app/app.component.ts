import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from './navbar';
import { EventGridInfiniteComponent } from './event-grid-infinite';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [NavbarComponent, EventGridInfiniteComponent]
})
export class AppComponent {
  
}
