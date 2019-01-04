import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { TrackerService } from "./tracker/tracker.service";
import { TrackerDirective } from './directives/tracker.directive';

@NgModule({
  declarations: [
    AppComponent,
    TrackerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [TrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
