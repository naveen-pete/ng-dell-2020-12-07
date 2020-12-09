import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]  // root component
})
export class AppModule { }

// Annotation
// @name()

// displayDetails(10, name, city)

// {} - object - empty
// [] - array - empty

var c = {
  id: 10,
  name: 'hari',
  city: 'bangalore'
};

var a = [1, 2, 3, 'a', true];

// class Product {
//   // members - properties or methods
//   id: number; // public by default
//   private name: string;
//   protected price: number;

//   constructor(id: number = 10, name: string = 'abc') {
//     this.id = id;
//     this.name = name;
//   }

//   showData() {
//     console.log('Product information');
//     console.log('name:', this.name);
//     console.log('price:', this.price);
//   }

// }

// var obj = new Product(10, 'iPhone');
// var obj1 = new Product();
