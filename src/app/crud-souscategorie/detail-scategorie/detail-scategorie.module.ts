import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailScategoriePageRoutingModule } from './detail-scategorie-routing.module';

import { DetailScategoriePage } from './detail-scategorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailScategoriePageRoutingModule
  ],
  declarations: [DetailScategoriePage]
})
export class DetailScategoriePageModule {}
