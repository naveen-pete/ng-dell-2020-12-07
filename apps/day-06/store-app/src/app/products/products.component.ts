import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductModel } from './product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: ProductModel[] = [];
  private subRefreshProducts: Subscription;

  constructor(private service: ProductsService) {
    console.log('ProductsComponent constructor() invoked.');
  }

  ngOnInit() {
    this.products = this.service.getAllProducts();

    this.subRefreshProducts = this.service.refreshProducts.subscribe(
      (products: ProductModel[]) => this.products = products
    );

    console.log('ProductsComponent.ngOnInit() invoked. refreshProducts event subscribed.');
  }

  ngOnDestroy() {
    if (this.subRefreshProducts) {
      this.subRefreshProducts.unsubscribe();
    }

    console.log('ProductsComponent.ngOnDestroy() invoked. refreshProducts event unsubscribed.');
  }
}
