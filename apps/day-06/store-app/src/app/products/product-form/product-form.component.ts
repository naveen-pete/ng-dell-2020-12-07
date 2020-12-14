import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProductModel } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: ProductModel = new ProductModel();
  showMessage = false;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('Product form submitted.');

    if (!form.valid) {
      console.log('Product form is not valid.');
      return;
    } else {
      console.log('Product form is valid.');
    }

    console.log(form.value);

    form.reset();


    // const product: ProductModel = {
    //   ...this.product,
    //   id: Date.now().toString(),
    //   price: +this.product.price
    // }

    // this.service.addProduct(product);
    // this.product = new ProductModel();

    // this.showMessage = true;

    // setTimeout(() => {
    //   this.showMessage = false;
    // }, 5000);

  }

}
