import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDashbordPageRoutingModule } from './admin-dashbord-routing.module';

import { AdminDashbordPage } from './admin-dashbord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDashbordPageRoutingModule
  ],
  declarations: [AdminDashbordPage]
})
export class AdminDashbordPageModule {}
