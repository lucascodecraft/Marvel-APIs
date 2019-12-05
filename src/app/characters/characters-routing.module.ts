import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CharactersComponent } from './characters.component';

const routes: Routes = [
  {
    path: '', component: CharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
