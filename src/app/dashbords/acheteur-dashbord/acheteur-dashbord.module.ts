import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcheteurDashbordPageRoutingModule } from './acheteur-dashbord-routing.module';

import { AcheteurDashbordPage } from './acheteur-dashbord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcheteurDashbordPageRoutingModule
  ],
  declarations: [AcheteurDashbordPage]
})
export class AcheteurDashbordPageModule {}
