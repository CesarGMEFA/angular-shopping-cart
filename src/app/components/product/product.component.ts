import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Product } from 'src/app/interfaces/product.interface';

// services
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('theItem') product: Product = {
    id: 0.0,
    title: '',
    images: [''],
    price: 0.0,
    description: '',
    category: {
      id: 0,
      name: '',
      image: '',
      creationAt: '',
      updatedAt: '',
    },
    quantity: 0
  };
  addedProduct: boolean = false;
  @Output() addProduct = new EventEmitter<Product>();

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.checkingProductInCart();
  }
  onAddToCart() {
    const verification = this.storeService.checkingProductInCart(this.product);
    if (!verification) {
      this.addProduct.emit(this.product);
      this.addedProduct = true;
    } else {
      this.addProduct.emit(this.product);
      this.addedProduct = false;
    }
  }

  checkingProductInCart() {
    const verification = this.storeService.checkingProductInCart(this.product);
    if (!verification) {
      this.addedProduct = false;
    } else {
      this.addedProduct = true;
    }
  }
}
