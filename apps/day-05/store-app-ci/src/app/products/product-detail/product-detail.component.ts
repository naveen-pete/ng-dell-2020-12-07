import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { ProductModel } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: ProductModel;
  @Output() deleteProduct = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    if (confirm('Are you sure?')) {
      this.deleteProduct.emit(this.product.id);
    }
  }

}
