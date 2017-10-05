import { IShoppingCartState, CART_INITIAL_STATE } from './../shopping-cart/store/state';
import { IProductState, PRODUCT_INITIAL_STATE } from './../product/store/state';
export interface IReduxCartState {
  product: IProductState;
  cart: IShoppingCartState;
}

export const INITIAL_STATE: IReduxCartState = {
  product: PRODUCT_INITIAL_STATE,
  cart: CART_INITIAL_STATE
};
