import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Child3PageRoutingModule } from './child3-routing.module';

import { Child3Page } from './child3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Child3PageRoutingModule
  ],
  declarations: [Child3Page]
})
export class Child3PageModule {}
