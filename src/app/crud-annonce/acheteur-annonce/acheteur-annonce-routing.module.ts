import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcheteurAnnoncePage } from './acheteur-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: AcheteurAnnoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcheteurAnnoncePageRoutingModule {}
