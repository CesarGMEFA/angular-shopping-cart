import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private shoppingCart: Product[] = []
  private myCart = new BehaviorSubject<Product[]>([])

  myCart$ = this.myCart.asObservable();

  constructor() { }

  addProduct(product: Product) {
    this.shoppingCart.push(product)
    this.myCart.next(this.shoppingCart)
  }

  getShoppingCart() {
    return this.shoppingCart
  }

  getTotal() {
    return this.shoppingCart.reduce((value,item) => value + item.price,0)
  }

}
