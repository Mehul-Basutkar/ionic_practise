import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Child3Page } from './child3.page';

const routes: Routes = [
  {
    path: '',
    component: Child3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Child3PageRoutingModule {}
