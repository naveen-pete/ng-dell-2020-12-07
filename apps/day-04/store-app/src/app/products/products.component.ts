import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  showMessage = false;
  product: ProductModel = new ProductModel();

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

  onSubmit() {  // outer function
    console.log('Product form is submitted.');

    this.product.id = Date.now().toString();
    this.product.price = +this.product.price;

    this.products.unshift(this.product);
    this.product = new ProductModel();

    this.showMessage = true;
    var obj = this;
    console.log('onSubmit() - this:', this);

    setTimeout(function () {  // inner function
      console.log('setTimeout callback - this:', this);
      obj.showMessage = false;
      console.log('showMessage has been reset to false.');
    }, 5000);
  }

}

class ProductModel {
  id: string;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
}

// instance / object - reference
