import { ProductEpics } from './product/store/epics';
import { ShoppingCartActions } from './shopping-cart/store/actions';
import { ProductActions } from './product/store/actions';
export const ACTION_SERVICE_PROVIDERS = [
  ProductActions,
  ShoppingCartActions,
  ProductEpics
];
