import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from "./search.component";
import { EditComponent } from "./edit.component";
import { HelloComponent } from "./hello.component";

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: SearchComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'hello', component: HelloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
