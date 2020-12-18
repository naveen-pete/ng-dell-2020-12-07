import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { ProductModel } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  isLoading = false;
  products: ProductModel[] = [];
  private subRefreshProducts: Subscription;

  constructor(
    private router: Router,
    private service: ProductsService,
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.service.getAllProducts().subscribe(
      (products: ProductModel[]) => {
        this.products = products;
        this.isLoading = false;
      },
      (error) => {
        console.log('Get products failed.');
        console.log('Error:', error);
        this.isLoading = false;
      }
    );

    this.subRefreshProducts = this.service.refreshProducts.subscribe(
      (products: ProductModel[]) => this.products = products
    );
  }

  onAdd() {
    this.router.navigate(['/products/new']);
  }

  ngOnDestroy() {
    if (this.subRefreshProducts) {
      this.subRefreshProducts.unsubscribe();
    }
  }
}
