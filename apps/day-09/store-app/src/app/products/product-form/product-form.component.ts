import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { ProductModel } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  private id: string;
  private addNew: boolean = true;
  @ViewChild('productForm') form: NgForm;
  product: ProductModel = new ProductModel();
  showMessage = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      if (map.get('id')) {
        this.id = map.get('id');
        this.service.getProduct(this.id).subscribe(
          (product: ProductModel) => {
            this.product = product;
            this.addNew = false;
          },
          (error) => {
            console.log('Get product failed.');
            console.log('Error:', error);
          }
        );
      }
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      console.log('Product form is not valid.');
      return;
    }

    const { name, description, price, isAvailable } = this.form.value;

    const product: ProductModel = {
      id: null,
      name,
      description,
      price: +price,
      isAvailable: isAvailable || false
    };

    let product$: Observable<any>;
    let navParams;
    if (this.addNew) {
      product$ = this.service.addProduct(product);
      navParams = ['/products'];
    } else {
      product$ = this.service.updateProduct(this.id, product);
      navParams = ['/products', this.id];
    }

    product$.subscribe(
      () => {
        this.router.navigate(navParams);
      },
      (error) => {
        console.log('Add/Update product failed.');
        console.log('Error:', error);
      }
    );
  }

}
