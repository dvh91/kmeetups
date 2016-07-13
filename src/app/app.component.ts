import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from './navbar';
import { EventGridComponent } from './event-grid';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [NavbarComponent, EventGridComponent]
})
export class AppComponent {}
