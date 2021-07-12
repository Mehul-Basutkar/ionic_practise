import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Child4Page } from './child4.page';

const routes: Routes = [
  {
    path: '',
    component: Child4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Child4PageRoutingModule {}
