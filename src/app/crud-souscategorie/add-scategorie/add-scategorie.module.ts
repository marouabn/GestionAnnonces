import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddScategoriePageRoutingModule } from './add-scategorie-routing.module';

import { AddScategoriePage } from './add-scategorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddScategoriePageRoutingModule
  ],
  declarations: [AddScategoriePage]
})
export class AddScategoriePageModule {}
