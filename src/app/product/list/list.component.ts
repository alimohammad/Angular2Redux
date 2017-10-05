import { ProductActions } from './../store/actions';
import { IReduxCartState } from './../../reduxcart-store/state';
import { IProduct } from './../model/product';
import { Observable } from 'rxjs/Observable';
import { IProductState } from './../store/state';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  @select((s: IReduxCartState) => s.product.products)
  products$: Observable<IProduct[]>;
  constructor(private service: ProductService, private actions: ProductActions) { }

  ngOnInit() {
    this.service.getProducts();
  }

  public showThisProductDetails(data: any) {
    this.actions.productSelectedEvent(data);
  }

}
