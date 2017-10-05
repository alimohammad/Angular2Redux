import { ICartInfo } from './../model/cart';
import { Observable } from 'rxjs/Observable';
import { IReduxCartState } from './../../reduxcart-store/state';
import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html'
})
export class CartInfoComponent implements OnInit {
  @select((s: IReduxCartState) => s.cart.cartInfo.length)
  cartItemsCount$: Observable<ICartInfo[]>;
  constructor() { }

  ngOnInit() {
  }

}
