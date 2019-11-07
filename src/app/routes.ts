import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroFilterListComponent } from './heroes/heroes-filter.component';

import { SearchComponent } from "./search.component";
import { EditComponent } from "./edit.component";

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
