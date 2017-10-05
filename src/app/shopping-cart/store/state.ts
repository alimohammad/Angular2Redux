import { ICartInfo } from './../model/cart';

export interface IShoppingCartState {
  cartInfo: ICartInfo[];
  error: any;
  loading: boolean;
}

export const CART_INITIAL_STATE: IShoppingCartState = {
  cartInfo: new Array<ICartInfo>(),
  error: {},
  loading: false
};
