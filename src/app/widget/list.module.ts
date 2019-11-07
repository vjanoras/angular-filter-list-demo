import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import {ListWidgetComponent } from "./list-widget.component";



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    ListWidgetComponent
  ],
  providers: [ 
  ],
  exports: [ 
    ListWidgetComponent 
  ]
})
export class ListModule { }
