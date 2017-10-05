import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';
import { dispatch } from '@angular-redux/store';

type Payload = any;
interface MetaData { cartState: {}; }
export type ShoppingCartAction = FluxStandardAction<Payload, MetaData>;

@Injectable()
export class ShoppingCartActions {
  static readonly ADD_ITEM_TO_CART = 'Add Item to Cart';
  static readonly ADD_ITEM_TO_CART_SUCCEEDED = 'Add Item to Cart Succeeded';
  static readonly ADD_ITEM_TO_CART_FDAILED = 'Add Item to Cart Failed';

  @dispatch()
  addItemToCart = (payload: any): ShoppingCartAction => ({
    type: ShoppingCartActions.ADD_ITEM_TO_CART,
    payload,
    meta: null
  })

  @dispatch()
  addItemToCartSucceeded = (): ShoppingCartAction => ({
    type: ShoppingCartActions.ADD_ITEM_TO_CART,
    payload: null,
    meta: null
  })

  @dispatch()
  addItemToCartFailed = (error: any): ShoppingCartAction => ({
    type: ShoppingCartActions.ADD_ITEM_TO_CART,
    payload: null,
    meta: null,
    error
  })
}
