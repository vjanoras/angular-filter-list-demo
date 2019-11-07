import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {PfmFilterListWidget } from './filter-list-widget.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    PfmFilterListWidget
  ],
  providers: [ 
  ],
  exports: [ 
    PfmFilterListWidget 
  ]
})
export class PfmListModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/