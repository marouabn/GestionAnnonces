import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailScategoriePage } from './detail-scategorie.page';

const routes: Routes = [
  {
    path: '',
    component: DetailScategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailScategoriePageRoutingModule {}
