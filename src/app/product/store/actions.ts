import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';
import { dispatch } from '@angular-redux/store';

type Payload = any;
interface MetaData { productType: {}; }
export type ProductAction = FluxStandardAction<Payload, MetaData>;


@Injectable()
export class ProductActions {
  static readonly GET_PRODUCTS = 'Get Products';
  static readonly GET_PRODUCTS_STARTED = 'Start Getting Products';
  static readonly GET_PRODUCTS_SUCCEEDED = 'Getting Products Succeeded';
  static readonly GET_PRODUCTS_FAILED = 'Getting Products Failed';
  static readonly PRODUCT_SELECTED = 'Product Selected Event';
  static readonly SHOW_PRODUCT_SELECTED = 'Show Product Selected';
  static readonly SHOW_PRODUCT_SELECTED_SUCCEEDED = 'Show Product Selected Succeeded';
  static readonly SHOW_PRODUCT_SELECTED_FAILED = 'Show Product Selected Failed';

  @dispatch()
  getProductList = (): ProductAction => ({
    type: ProductActions.GET_PRODUCTS,
    payload: null,
    meta: null
  })

  @dispatch()
  getProductStart = (): ProductAction => ({
    type: ProductActions.GET_PRODUCTS_STARTED,
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

  @dispatch()
  productSelectedEvent = (payload: any): ProductAction => ({
    type: ProductActions.PRODUCT_SELECTED,
    payload,
    meta: null
  })

  @dispatch()
  showProductDetail = (): ProductAction => ({
    type: ProductActions.SHOW_PRODUCT_SELECTED,
    payload: null,
    meta: null
  })

  @dispatch()
  showProductDetailSucceeded = (): ProductAction => ({
    type: ProductActions.SHOW_PRODUCT_SELECTED_SUCCEEDED,
    payload: null,
    meta: null
  })

  @dispatch()
  showProductDetailFailed = (): ProductAction => ({
    type: ProductActions.SHOW_PRODUCT_SELECTED_FAILED,
    payload: null,
    meta: null
  })
}

