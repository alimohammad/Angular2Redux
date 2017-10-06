import { RouterModule } from '@angular/router';
import { IReduxCartState } from './../../reduxcart-store/state';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Epic, ActionsObservable, createEpicMiddleware } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { ProductActions, ProductAction } from './';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

@Injectable()
export class ProductEpics {
  constructor(private http: Http, private productionActions: ProductActions) { }

  public createProductEpic() {
    return createEpicMiddleware(this.fetchProductEpic());
  }

  // fetchProducts = (action$: ActionsObservable<ProductAction>) => {
  //   return action$.ofType(ProductActions.GET_PRODUCTS)
  //     .mergeMap(() => {
  //       return this.http.get('http://localhost:3000/products')
  //         .map(response => ({
  //           type: ProductActions.GET_PRODUCTS_SUCCEEDED,
  //           payload: response.json()
  //         }))
  //         .catch(error => Observable.of({
  //           type: ProductActions.GET_PRODUCTS_FAILED,
  //           payload: error
  //         }));
  //     });
  // }

  private fetchProductEpic(): Epic<ProductAction, IReduxCartState> {
    return (action$, store) => action$
      .ofType(ProductActions.GET_PRODUCTS)
      .switchMap(() => this.http.get('http://localhost:3000/products')
        .map(data => (this.productionActions.getProductListSucceeded(data.json())))
        .catch(error => of(this.productionActions.getProductListFailed(error)))
        .startWith(this.productionActions.getProductStart()));
  }

  private showProductDetailEpic(): Epic<ProductAction, IReduxCartState> {
    return (action$, store) => action$
      .ofType(ProductActions.PRODUCT_SELECTED)
      .map(data => (this.productionActions.showProductDetailSucceeded()))
      .catch(error => of(this.productionActions.showProductDetailFailed()))
      .startWith(this.productionActions.showProductDetail());
  }
}
