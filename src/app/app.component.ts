import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from './navbar';

@Component({
  //moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  directives: [NavbarComponent]
})
export class AppComponent {

}
