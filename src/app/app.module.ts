import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { HelloComponent } from './hello.component';
// import { SampleChecklistPageComponent } from './sample-checklist.component';
// import { ChecklistModule } from './checklist/checklist.module';
// import { DynamicFormDirective } from './dynamic-form/dynamic-form.directives';
// import { DynamicFormContent } from './dynamic-form/dynamic-template.directive';
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
