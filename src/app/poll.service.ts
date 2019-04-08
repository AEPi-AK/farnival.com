import { Injectable } from '@angular/core';

import { PollResult } from './poll-result';
import { RESULTS } from './mock-poll-results'

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor() { }

  getResults() {
  	return RESULTS;
  }
}
