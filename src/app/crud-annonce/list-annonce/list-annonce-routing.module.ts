import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAnnoncePage } from './list-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: ListAnnoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAnnoncePageRoutingModule {}
