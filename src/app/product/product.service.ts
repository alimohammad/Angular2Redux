import { ProductActions } from './store/actions';
import { IProduct } from './model/product';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
  constructor(private http: Http, private actions: ProductActions) { }

  getProducts() {
    this.actions.getProductList();
    return this.http.get('http://localhost:3000/products')
      .map(this.extractData)
      .subscribe((response: any) => {
        console.log('service:', response);
        this.actions.getProductListSucceeded(response);
      }, (error: any) => {
        this.actions.getProductListFailed(error);
      });
  }

  extractData(resp: Response) {
    const body = resp.json();
    if (body) {
      return body.data || body;
    } else {
      return {};
    }
  }
}
