import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PwdPage } from './pwd.page';

const routes: Routes = [
  {
    path: '',
    component: PwdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PwdPageRoutingModule {}
