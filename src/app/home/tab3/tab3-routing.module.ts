import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page
  },
  {
    path: 'child3',
    loadChildren: () => import('./child3/child3.module').then( m => m.Child3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3PageRoutingModule {}
