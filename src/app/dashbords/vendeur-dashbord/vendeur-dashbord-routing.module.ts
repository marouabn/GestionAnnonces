import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendeurDashbordPage } from './vendeur-dashbord.page';

const routes: Routes = [
  {
    path: '',
    component: VendeurDashbordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendeurDashbordPageRoutingModule {}
