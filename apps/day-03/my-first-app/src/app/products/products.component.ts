import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productName: string = 'iPhone 12';
  productPrice: number = 120000;

  constructor() { }

  onSaveProduct() {
    console.log('Save Product button clicked.');
  }

  onSearch(event) {
    console.log('event:', event.target.value);
  }

}
