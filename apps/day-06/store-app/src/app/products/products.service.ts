import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ProductModel } from './product.model';

@Injectable()
export class ProductsService {
  refreshProducts = new Subject<ProductModel[]>();

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
    return [...this.products];
  }

  addProduct(newProduct: ProductModel) {
    this.products.unshift(newProduct);

    // raise / emit refreshProducts event
    this.refreshProducts.next([...this.products]);
  }

  deleteProduct(id: string) {
    // const index = this.products.findIndex(
    //   p => p.id === id
    // );

    // if (index >= 0) {
    //   this.products.splice(index, 1);

    //   // raise / emit refreshProducts event
    //   this.refreshProducts.next([...this.products]);
    // }

    this.products = this.products.filter(
      p => p.id !== id
    );
    this.refreshProducts.next([...this.products]);
  }
}
