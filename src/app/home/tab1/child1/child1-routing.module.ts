import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Child1Page } from './child1.page';

const routes: Routes = [
  {
    path: '',
    component: Child1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Child1PageRoutingModule {}
