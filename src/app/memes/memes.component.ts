import { Component, OnInit } from '@angular/core';

import { MemesService } from '../memes.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit {
  image: Blob;

  constructor(private memesService: MemesService) { }

  ngOnInit() {
  	this.getImage();
  }

  getImage() {
  	this.memesService.getImage().subscribe(image => this.image = image);
  }

}
