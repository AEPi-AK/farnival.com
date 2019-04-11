import { Component, OnInit, Input } from '@angular/core';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-lock-screen',
  templateUrl: './lock-screen.component.html',
  styleUrls: ['./lock-screen.component.css']
})
export class LockScreenComponent implements OnInit {

  has_failed: boolean;
  @Input() guess: string;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.has_failed = false;
  }

  submit() {
    this.authenticationService.checkAuth(this.guess);
    this.has_failed = true;
    // this.has_failed = this.authenticationService.unlocked.auth;
  }

}
