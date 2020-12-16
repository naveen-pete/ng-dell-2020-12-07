import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
        this.product = this.service.getProduct(this.id);
        this.addNew = false;
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

    if (this.addNew) {
      product.id = Date.now().toString();
      this.service.addProduct(product);
      this.router.navigate(['/products']);
    } else {
      product.id = this.id;
      this.service.updateProduct(this.id, product);
      this.router.navigate(['/products', this.id]);
    }
  }

}
