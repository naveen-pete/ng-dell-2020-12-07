import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productId: string = 'A100';
  productName: string = 'iPhone X';
  productDescription: string = 'A smart phone from Apple Inc.';
  productPrice: number = 70000;
  productIsAvailable: boolean = false;

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
    },
    {
      id: '40',
      name: 'Nokia',
      description: 'A smart phone from Nokia',
      price: 40000,
      isAvailable: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

class ProductModel {
  id: string;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
}
