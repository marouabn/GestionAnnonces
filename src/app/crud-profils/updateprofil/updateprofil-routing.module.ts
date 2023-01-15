import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateprofilPage } from './updateprofil.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateprofilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateprofilPageRoutingModule {}
