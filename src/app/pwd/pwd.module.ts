import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PwdPageRoutingModule } from './pwd-routing.module';

import { PwdPage } from './pwd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PwdPageRoutingModule
  ],
  declarations: [PwdPage]
})
export class PwdPageModule {}
