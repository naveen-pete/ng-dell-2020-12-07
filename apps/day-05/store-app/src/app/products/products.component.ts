import { Component } from '@angular/core';

import { ProductModel } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: ProductModel[] = [
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
