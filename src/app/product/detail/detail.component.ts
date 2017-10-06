import { IProduct } from './../model/product';
import { Observable } from 'rxjs/Observable';
import { IReduxCartState } from './../../reduxcart-store/state';
import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  @select((s: IReduxCartState) => s.product.uiState.selectedProduct)
  selectedProduct$: Observable<IProduct>;
  constructor() { }

  ngOnInit() {
  }

}
