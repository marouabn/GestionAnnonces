import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateprofilPageRoutingModule } from './updateprofil-routing.module';

import { UpdateprofilPage } from './updateprofil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateprofilPageRoutingModule
  ],
  declarations: [UpdateprofilPage]
})
export class UpdateprofilPageModule {}
