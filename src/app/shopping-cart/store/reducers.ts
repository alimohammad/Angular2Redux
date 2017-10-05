import { ShoppingCartActions, ShoppingCartAction } from './actions';
import { IShoppingCartState, CART_INITIAL_STATE } from './state';
import { Action } from 'redux';

export function shoppingCartReducer(state: IShoppingCartState = CART_INITIAL_STATE, a: Action): IShoppingCartState {
  const action = a as ShoppingCartAction;
  switch (action.type) {
    case ShoppingCartActions.ADD_ITEM_TO_CART:
      return {
        ...state,
        loading: true,
        cartInfo: state.cartInfo.concat(action.payload)
      };
    case ShoppingCartActions.ADD_ITEM_TO_CART_SUCCEEDED:
      return {
        ...state,
        loading: false
      };
    case ShoppingCartActions.ADD_ITEM_TO_CART_FDAILED:
      return {
        ...state,
        error: state.error = action.error
      };
    default:
      return state;
  }
}
