import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';
import { dispatch } from '@angular-redux/store';

type Payload = any;
interface MetaData { productType: {}; }
export type ProductAction = FluxStandardAction<Payload, MetaData>;


@Injectable()
export class ProductActions {
  static readonly GET_PRODUCTS = 'Start Getting Products';
  static readonly GET_PRODUCTS_SUCCEEDED = 'Getting Products Succeeded';
  static readonly GET_PRODUCTS_FAILED = 'Getting Products Failed';

  @dispatch()
  getProductList = (): ProductAction => ({
    type: ProductActions.GET_PRODUCTS,
    payload: null,
    meta: null
  })

  @dispatch()
  getProductListSucceeded = (payload: any): ProductAction => ({
    type: ProductActions.GET_PRODUCTS_SUCCEEDED,
    payload,
    meta: null
  })

  @dispatch()
  getProductListFailed = (error: any): ProductAction => ({
    type: ProductActions.GET_PRODUCTS_FAILED,
    payload: null,
    meta: null,
    error
  })
}

