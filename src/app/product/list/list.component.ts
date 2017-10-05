import { ICartInfo } from './../../shopping-cart/model/cart';
import { ShoppingCartActions } from './../../shopping-cart/store/actions';
import { ProductActions } from './../store/actions';
import { IReduxCartState } from './../../reduxcart-store/state';
import { IProduct } from './../model/product';
import { Observable } from 'rxjs/Observable';
import { IProductState } from './../store/state';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  @select((s: IReduxCartState) => s.product.products)
  products$: Observable<IProduct[]>;
  constructor(
    private service: ProductService,
    private actions: ProductActions,
    private cartActions: ShoppingCartActions) { }

  ngOnInit() {
    this.service.getProducts();
  }

  public showThisProductDetails(data: any) {
    this.actions.productSelectedEvent(data);
  }

  public addToCart(product: IProduct) {
    const cartItem: ICartInfo = {
      id: product.id + 100,
      quantity: 1,
      productId: product.id,
      pricePerItem: product.price
    };
    this.cartActions.addItemToCart(cartItem);
  }

}
