import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAnnoncePageRoutingModule } from './list-annonce-routing.module';

import { ListAnnoncePage } from './list-annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListAnnoncePageRoutingModule
  ],
  declarations: [ListAnnoncePage]
})
export class ListAnnoncePageModule {}
