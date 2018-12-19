import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { Stack } from "./utils/stack";
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    AboutComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [Stack],
  bootstrap: [AppComponent]
})
export class AppModule { }
