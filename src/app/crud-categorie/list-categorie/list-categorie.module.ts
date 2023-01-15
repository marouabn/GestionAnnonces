import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCategoriePageRoutingModule } from './list-categorie-routing.module';

import { ListCategoriePage } from './list-categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCategoriePageRoutingModule
  ],
  declarations: [ListCategoriePage]
})
export class ListCategoriePageModule {}
