import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { CartInfoComponent } from './cart-info/cart-info.component';

@NgModule({
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ],
  declarations: [CartInfoComponent],
  exports: [CartInfoComponent]
})
export class ShoppingCartModule { }
