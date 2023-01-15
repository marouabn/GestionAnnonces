import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurDashbordPageRoutingModule } from './vendeur-dashbord-routing.module';

import { VendeurDashbordPage } from './vendeur-dashbord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurDashbordPageRoutingModule
  ],
  declarations: [VendeurDashbordPage]
})
export class VendeurDashbordPageModule {}
