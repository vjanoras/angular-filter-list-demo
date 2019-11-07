import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PfmListModule } from "./list/list.module";
import { AppRoutingModule } from './routes';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    
    PfmListModule
  ],
  declarations: [ 
      AppComponent
  ],
  bootstrap: [ 
    AppComponent 
  ],
  entryComponents: []
  })
export class AppModule { 
  
}
