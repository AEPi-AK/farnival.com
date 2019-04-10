import { Component, OnInit } from '@angular/core';

import { PollResult } from "../poll-result";
import { PollService } from "../poll.service"

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  votes: PollResult;

  constructor(private pollService: PollService) { }

  ngOnInit() {
  	this.getResults();
  }

  onVote(name: string) {
  	this.votes[name] += 1;
  	this.updateResults(name);
  }

  updateResults(name: string) {
  	this.pollService.updateResults(name);
  }

  getResults() {
  	this.pollService.getResults().subscribe(votes => this.votes = votes);
  }

}
