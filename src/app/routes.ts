import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroFilterListComponent } from './heroes/heroes-filter.component';


const routes: Routes = [
  { path: '', redirectTo: '/widget', pathMatch: 'full' },
  { path: 'widget', component: HeroFilterListComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
