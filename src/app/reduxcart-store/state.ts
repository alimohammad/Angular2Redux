import { IProductState, PRODUCT_INITIAL_STATE } from './../product/store/state';
export interface IReduxCartState {
  product: IProductState;
}

export const INITIAL_STATE: IReduxCartState = {
  product: PRODUCT_INITIAL_STATE
};
