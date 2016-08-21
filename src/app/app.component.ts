import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { NavbarComponent } from './navbar';

@Component({
  
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  directives: [NavbarComponent]
})
export class AppComponent {
  viewContainerRef:any;

  public constructor(viewContainerRef:ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }
}
