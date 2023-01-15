import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddScategoriePage } from './add-scategorie.page';

const routes: Routes = [
  {
    path: '',
    component: AddScategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddScategoriePageRoutingModule {}
