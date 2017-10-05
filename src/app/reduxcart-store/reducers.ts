import { IReduxCartState } from './state';
import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';
import { Action } from 'redux';
import { productReducer } from './../product/store';

export const rootReducer = combineReducers<IReduxCartState>({
  product: productReducer
});
