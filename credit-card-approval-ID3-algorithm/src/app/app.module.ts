import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ID3Service } from "./utils/id3.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeviewComponent } from './utils/components/treeview/treeview.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ID3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
