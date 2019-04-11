import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { PollResult } from './poll-result';
import { RESULTS } from './mock-poll-results'

@Injectable({
  providedIn: 'root'
})
export class PollService {
  constructor(private http: HttpClient) { }

  private pollURL = `http://${window.location.hostname}:5000`;

  private pollGetUrl = `${this.pollURL}/votes`;
  private pollPostUrl = `${this.pollURL}/vote_`;

  getResults(): Observable<PollResult> {
    var r = this.http.get<PollResult>(this.pollGetUrl);
    return r;
  }

  updateResults(person: string) {
    console.log("updating");
    this.http.post<PollResult>(this.pollPostUrl + person, "").subscribe();
  }
}
