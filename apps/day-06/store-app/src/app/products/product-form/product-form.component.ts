import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ProductModel } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() addProduct = new EventEmitter<ProductModel>();

  product: ProductModel = new ProductModel();
  showMessage = false;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.product.id = Date.now().toString();
    this.product.price = +this.product.price;

    // this.addProduct.emit(this.product);
    // this.products.unshift(this.product);
    this.service.addProduct(this.product);
    this.product = new ProductModel();

    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 5000);

  }

}
