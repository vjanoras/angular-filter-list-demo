import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './heroes/in-memory-data.service';



import { HeroFilterListComponent} from './heroes/heroes-filter.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroService } from './heroes/hero.service';



import { AppComponent } from './app.component';
import { PfmAccordionModule } from "./accordion-card/accordion-card.module";
import { PfmListModule } from "./list/list.module";
import { AppRoutingModule } from './routes';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    PfmAccordionModule, 
    PfmListModule,
    ReactiveFormsModule
  ],
  declarations: [ 
      AppComponent,
      HeroesComponent,
     // HeroDetailComponent
  ],
  bootstrap: [ 
    AppComponent 
  ],
  entryComponents: []
  })
export class AppModule { 
  
}
