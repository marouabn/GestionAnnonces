import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashbordPage } from './admin-dashbord.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDashbordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashbordPageRoutingModule {}
