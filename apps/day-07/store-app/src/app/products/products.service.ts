import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ProductModel } from './product.model';
import { LoggerService } from '../common/logger.service';

@Injectable({
  providedIn: 'root'
})
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

  constructor(private logger: LoggerService) { }

  getAllProducts(): ProductModel[] {
    return [...this.products];
  }

  getProduct(id: string) {
    const product = this.products.find(
      p => p.id === id
    );

    return { ...product };
  }

  addProduct(newProduct: ProductModel) {
    this.products.unshift(newProduct);

    this.refreshProducts.next([...this.products]);
    this.logger.log('Product added successfully.');
  }

  updateProduct(id: string, product: ProductModel) {
    const productToUpdate = this.products.find(
      p => p.id === id
    );

    if (productToUpdate) {
      productToUpdate.name = product.name;
      productToUpdate.description = product.description;
      productToUpdate.price = product.price;
      productToUpdate.isAvailable = product.isAvailable;

      this.refreshProducts.next([...this.products]);
      this.logger.log('Product updated successfully.');
    }
  }

  deleteProduct(id: string) {
    this.products = this.products.filter(
      p => p.id !== id
    );

    this.refreshProducts.next([...this.products]);
    this.logger.log('Product deleted successfully.');
  }
}
