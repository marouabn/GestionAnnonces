import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListScategoriePageRoutingModule } from './list-scategorie-routing.module';

import { ListScategoriePage } from './list-scategorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListScategoriePageRoutingModule
  ],
  declarations: [ListScategoriePage]
})
export class ListScategoriePageModule {}
