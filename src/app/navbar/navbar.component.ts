import { Component, OnInit } from '@angular/core';
import { MODAL_DIRECTIVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss'],
  viewProviders:[BS_VIEW_PROVIDERS],
  directives: [MODAL_DIRECTIVES]
})
export class NavbarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
