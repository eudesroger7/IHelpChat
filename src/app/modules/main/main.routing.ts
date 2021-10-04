import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'marketing',
    loadChildren: () => import('./pages/marketing/marketing.module').then(m => m.MarketingModule)
  }, {
    path: 'marketing/:id',
    loadChildren: () => import('./pages/marketing-details/marketing-details.module').then(m => m.MarketingDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
