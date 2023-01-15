import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcheteurAnnoncePageRoutingModule } from './acheteur-annonce-routing.module';

import { AcheteurAnnoncePage } from './acheteur-annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcheteurAnnoncePageRoutingModule
  ],
  declarations: [AcheteurAnnoncePage]
})
export class AcheteurAnnoncePageModule {}
