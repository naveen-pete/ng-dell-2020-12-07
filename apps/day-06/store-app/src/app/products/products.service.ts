import { Injectable } from '@angular/core';

import { ProductModel } from './product.model';

@Injectable()
export class ProductsService {
  private products: ProductModel[] = [
    {
      id: '10',
      name: 'Samsung Galaxy S10',
      description: 'A smart phone from Samsung',
      price: 50000,
      isAvailable: true
    },
    {
      id: '20',
      name: 'Google Pixel 4',
      description: 'A smart phone from Google',
      price: 60000,
      isAvailable: false
    },
    {
      id: '30',
      name: 'iPhone X',
      description: 'A smart phone from Apple',
      price: 70000,
      isAvailable: true
    }
  ];

  getAllProducts(): ProductModel[] {
    // code to issue http request to the server (REST API URL)
    // return this.products.slice();
    return this.products;
  }

  addProduct(newProduct: ProductModel) {
    console.log('products (before):', this.products);
    this.products.unshift(newProduct);
    console.log('products (after):', this.products);
  }
}
