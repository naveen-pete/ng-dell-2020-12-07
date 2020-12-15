import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProductModel } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @ViewChild('productForm') form: NgForm;
  product: ProductModel = new ProductModel();
  showMessage = false;

  constructor(private service: ProductsService) { }

  ngOnInit(): void { }

  onSubmit() {
    console.log('Product form submitted.');

    if (!this.form.valid) {
      console.log('Product form is not valid.');
      return;
    }
    const id = Date.now().toString();
    const { name, description, price, isAvailable } = this.form.value;

    const product: ProductModel = {
      id,
      name,
      description,
      price: +price,
      isAvailable: isAvailable || false
    };

    this.service.addProduct(product);
    this.form.reset();
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 5000);

  }

}
