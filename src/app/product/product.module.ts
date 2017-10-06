import { ProductService } from './product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { productRouting } from './product-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    productRouting
  ],
  declarations: [ListComponent, DetailComponent],
  providers: []
})
export class ProductModule { }
