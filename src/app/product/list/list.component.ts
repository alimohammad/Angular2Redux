import { ProductActions } from './../store/actions';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  constructor(private actions: ProductActions) { }

  ngOnInit() {
    this.actions.getProductList();
  }

}
