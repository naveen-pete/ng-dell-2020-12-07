import { Component, OnInit, Input } from '@angular/core';

import { ProductModel } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: ProductModel;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
  }

  onDelete() {
    if (confirm('Are you sure?')) {
      this.service.deleteProduct(this.product.id);
    }
  }

}
