import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemesComponent } from './memes/memes.component';
import { PollComponent }  from './poll/poll.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
	{ path: 'memes', component: MemesComponent},
	{ path: 'poll', component: PollComponent},
	{ path: 'video', component: VideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
