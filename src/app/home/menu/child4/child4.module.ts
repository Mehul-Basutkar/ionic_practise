import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Child4PageRoutingModule } from './child4-routing.module';

import { Child4Page } from './child4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Child4PageRoutingModule
  ],
  declarations: [Child4Page]
})
export class Child4PageModule {}
