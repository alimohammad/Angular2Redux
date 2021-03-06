import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: 'app/product/product.module#ProductModule',
    data: { pageTitle: 'Product' },
  },
  {
    path: '',
    loadChildren: 'app/product/product.module#ProductModule',
    data: { pageTitle: 'Product' },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
