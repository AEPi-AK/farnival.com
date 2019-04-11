import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollComponent } from './poll/poll.component';
import { MemesComponent } from './memes/memes.component';
import { VideoComponent } from './video/video.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    PollComponent,
    MemesComponent,
    VideoComponent,
    MainPageComponent,
    LockScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
