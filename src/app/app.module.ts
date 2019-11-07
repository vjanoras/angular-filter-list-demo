import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SearchComponent } from './search.component';
import { EditComponent } from './edit.component';


import { ListModule } from "./widget/list.module";
import { AppRoutingModule } from './routes';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,    
    ListModule
  ],
  declarations: [ 
      AppComponent,
      HelloComponent,
      SearchComponent,
      EditComponent
  ],
  bootstrap: [ 
    AppComponent 
  ],
  entryComponents: []
  })
export class AppModule { 
  
}
