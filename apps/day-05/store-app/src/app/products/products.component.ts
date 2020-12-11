import { Component, OnChanges, OnInit } from '@angular/core';

import { ProductModel } from './product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: ProductModel[] = [];
  // service: ProductsService;

  constructor(private service: ProductsService) {
    // this.service = service;
  }

  ngOnInit() {
    this.products = this.service.getAllProducts();
  }

  onAddProduct(product: ProductModel) {
    this.products.unshift(product);
  }

  onDeleteProduct(productId: string) {
    const index = this.products.findIndex(
      p => p.id === productId
    );

    if (index >= 0) {
      this.products.splice(index, 1);
    }
  }
}
