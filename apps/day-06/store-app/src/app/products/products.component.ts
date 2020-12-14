import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductModel } from './product.model';
import { ProductsService } from './products.service';
import { LoggerService } from '../common/logger.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: ProductModel[] = [];
  private subRefreshProducts: Subscription;

  constructor(
    private service: ProductsService,
    private logger: LoggerService
  ) { }

  ngOnInit() {
    this.products = this.service.getAllProducts();

    this.subRefreshProducts = this.service.refreshProducts.subscribe(
      (products: ProductModel[]) => this.products = products
    );

    this.logger.log('ProductsComponent.ngOnInit() invoked. refreshProducts event subscribed.');
  }

  ngOnDestroy() {
    if (this.subRefreshProducts) {
      this.subRefreshProducts.unsubscribe();
    }
  }
}
