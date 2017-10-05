import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { productRouting } from './product-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    productRouting
  ],
  declarations: [ListComponent, DetailComponent]
})
export class ProductModule { }
