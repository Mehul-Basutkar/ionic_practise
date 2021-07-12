import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
      path: 'tab1',
      loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
    },
    {
      path: 'tab2',
      loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
    },
    {
      path: 'tab3',
      loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
    }
    ]
  },
  {
    path: 'child4',
    loadChildren: () => import('./menu/child4/child4.module').then( m => m.Child4PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
