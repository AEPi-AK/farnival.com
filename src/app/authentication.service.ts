import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Authentication } from './authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  unlocked: Authentication;

  constructor(private http: HttpClient) { this.unlocked = {auth:false} }

  private authURL = `http://${window.location.hostname}:5000/auth`

  checkAuth(pass: string) {
  	this.http.post<Authentication>(this.authURL,{"code":pass}).subscribe(auth => this.unlocked = auth)
  }
}
