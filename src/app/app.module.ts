import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PfmAccordionModule } from "./accordion-card/accordion-card.module";
import { PfmListModule } from "./list/list.module";


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    PfmAccordionModule, 
    PfmListModule,
    ReactiveFormsModule
  ],
  declarations: [ 
      AppComponent,
  ],
  bootstrap: [ 
    AppComponent 
  ],
  entryComponents: []
  })
export class AppModule { 
  
}
