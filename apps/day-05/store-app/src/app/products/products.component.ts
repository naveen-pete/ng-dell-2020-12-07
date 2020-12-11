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
    this.product.id = Date.now().toString();
    this.product.price = +this.product.price;

    this.products.unshift(this.product);
    this.product = new ProductModel();

    this.showMessage = true;

    // const obj = this;
    // setTimeout(function () {  // inner function
    //   obj.showMessage = false;
    // }, 5000);

    setTimeout(() => {  // inner function
      this.showMessage = false;
    }, 5000);

  }

  onDelete(productId: string) {
    if (confirm('Are you sure?')) {
      // 1. find the index of the product with passed id
      const index = this.products.findIndex(
        p => p.id === productId
      );

      // -1
      // const index = this.products.findIndex(
      //   function (p) {
      //     return p.id === productId;
      //   }
      // );


      // 2. use Array.splice() method, pass index as 1st param, 
      // no. of elements to be removed as 2nd param
      if (index >= 0) {
        this.products.splice(index, 1);
      }

    }
  }

}

class ProductModel {
  id: string;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
}
