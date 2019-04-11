import { Component } from '@angular/core';

import { Authentication } from './authentication';
import { AuthenticationService } from './authentication.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'farnival';

  constructor(public authenticationService: AuthenticationService) { }


}
