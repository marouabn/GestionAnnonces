import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListScategoriePage } from './list-scategorie.page';

const routes: Routes = [
  {
    path: '',
    component: ListScategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListScategoriePageRoutingModule {}
