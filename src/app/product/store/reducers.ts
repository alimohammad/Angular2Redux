import { ProductAction, ProductActions } from './actions';
import { Action } from 'redux';
import { IProductState, PRODUCT_INITIAL_STATE } from './state';

export function productReducer(state: IProductState = PRODUCT_INITIAL_STATE, a: Action): IProductState {
  const action = a as ProductAction;
  switch (action.type) {
    case ProductActions.GET_PRODUCTS:
      return {
        ...state,
        loading: true
      };
    case ProductActions.GET_PRODUCTS_SUCCEEDED:
      return {
        ...state,
        products: state.products = action.payload,
        loading: false
      };
    case ProductActions.GET_PRODUCTS_FAILED:
      return {
        ...state,
        error: state.error = action.error
      };
    case ProductActions.PRODUCT_SELECTED:
      return {
        ...state,
        // Very import point to be noted, updated hierarichal states.
        uiState: {
          ...state.uiState,
          selectedProduct: action.payload
        }
      };
    default:
      return state;
  }
}
