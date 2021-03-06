import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from "../../environments/environment";
import { ProductModel } from './product.model';
import { LoggerService } from '../common/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  refreshProducts = new Subject<ProductModel[]>();

  private apiUrl = `${environment.dataApiUrl}/products`;
  private products: ProductModel[] = [];

  constructor(
    private http: HttpClient,
    private logger: LoggerService
  ) { }

  getAllProducts(): Observable<ProductModel[]> {
    return this.http.get(`${this.apiUrl}.json`).pipe(
      // operator 1,
      map((responseData: any) => {
        if (!responseData) {
          return [];
        }

        const products: ProductModel[] = [];
        const keys = Object.keys(responseData);
        keys.forEach((key) => {
          const product: ProductModel = {
            ...responseData[key],
            id: key
          };
          products.push(product);
        })
        return products;
      }),
      // operator 2
      tap((products: ProductModel[]) => {
        this.products = [...products];
      })
    );
  }

  getProduct(id: string): Observable<ProductModel> {
    return this.http.get(`${this.apiUrl}/${id}.json`).pipe(
      map((responseData: any) => {
        const product: ProductModel = {
          ...responseData,
          id: id
        }
        return product;
      })
    );
  }

  addProduct(newProduct: ProductModel): Observable<any> {
    return this.http.post(`${this.apiUrl}.json`, newProduct).pipe(
      tap((responseData: any) => {
        const product: ProductModel = {
          ...newProduct,
          id: responseData.name
        };

        this.products = [...this.products, product];
        this.refreshProducts.next(this.products);
      })
    );
  }

  updateProduct(id: string, product: ProductModel) {
    return this.http.patch(`${this.apiUrl}/${id}.json`, product)
      .pipe(
        tap((responseData: any) => {
          const updatedProduct: ProductModel = {
            ...responseData,
            id: id
          };
          this.products = this.products.map(
            p => p.id === id ? updatedProduct : p
          );

          this.refreshProducts.next(this.products);
        })
      );
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}.json`).pipe(
      tap(() => {
        this.products = this.products.filter(p => p.id !== id);

        this.refreshProducts.next(this.products);
      })
    );
  }
}
