import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcheteurDashbordPage } from './acheteur-dashbord.page';

const routes: Routes = [
  {
    path: '',
    component: AcheteurDashbordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcheteurDashbordPageRoutingModule {}
