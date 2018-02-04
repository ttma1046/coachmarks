import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoachmarksModule } from './coachmarks/coachmarks.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoachmarksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
