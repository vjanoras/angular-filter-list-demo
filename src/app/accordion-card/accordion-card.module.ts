import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PfmAccordionComponent } from "./accordion-card.component";
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    BrowserModule,
    NgbAccordionModule

  ],
  declarations: [
    PfmAccordionComponent
  ],
  providers: [ 
  ],
  exports: [ 
    PfmAccordionComponent 
  ]
})
export class PfmAccordionModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/