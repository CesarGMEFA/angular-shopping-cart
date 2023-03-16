import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input("theItem") product: Product = {
    id: 0.00,
    title: '',
    image: '',
    price: 0.00,
    description: '',
    category: ''
  }
  @Output() addedProduct = new EventEmitter<Product>();

  constructor() { }

  onAddToCart() {
    this.addedProduct.emit(this.product)
  }

}
