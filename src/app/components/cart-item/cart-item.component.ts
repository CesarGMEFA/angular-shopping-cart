import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

// services
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input() product: Product = {
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

  constructor(
    private storeService: StoreService
  ) { }

  quantitySubtract() {
    if (this.product.quantity > 1) {
      this.product.quantity -= 1
      this.storeService.updatedProduct(this.product)
    }
  }

  quantityAddition() {
    this.product.quantity += 1
    this.storeService.updatedProduct(this.product)
  }

  totalPrice() {
    return this.product.price * this.product.quantity
  }

  deleteProduct() {
    this.storeService.deleteProduct(this.product)
  }

}
