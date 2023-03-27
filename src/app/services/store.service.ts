import { Injectable } from '@angular/core';
import { parse } from 'date-fns';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private shoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  public myCart$ = this.myCart.asObservable();

  constructor() {
    this.getLocalStorage();
  }

  getShoppingCart() {
    return this.shoppingCart;
  }

  getTotal() {
    return this.shoppingCart.reduce((value, item) => value + item.price, 0);
  }

  getLocalStorage() {
    const storage = localStorage.getItem('shopping_cart');
    if (storage) {
      this.shoppingCart = JSON.parse(storage);
      this.myCart.next(this.shoppingCart);
    }
  }

  updatedProduct(product: Product) {
    const index = this.shoppingCart.indexOf(product)
    this.shoppingCart.splice(index, 1, product)
    this.myCart.next(this.shoppingCart);
    localStorage.setItem('shopping_cart', JSON.stringify(this.shoppingCart));
  }

  deleteProduct(product: Product) {
    const index = this.shoppingCart.indexOf(product)
    this.shoppingCart.splice(index, 1)
    this.myCart.next(this.shoppingCart);
    localStorage.setItem('shopping_cart', JSON.stringify(this.shoppingCart));
  }

  postLocalStorage(data: Product[]) {
    localStorage.setItem('shopping_cart', JSON.stringify([...data]));
  }

  checkingProductInCart(product: Product) {
    return Boolean(this.shoppingCart.find((item) => item.id === product.id));
  }

  addProductToShoppingCart(product: Product) {
    const verification = this.checkingProductInCart(product);
    if (!verification) {
      product.quantity = 1
      this.shoppingCart.push(product);
      this.myCart.next(this.shoppingCart);
      localStorage.setItem('shopping_cart', JSON.stringify(this.shoppingCart));
    } else {
      product.quantity = 0
      const indexProduct = this.shoppingCart.findIndex(
        (p) => p.id === product.id
      );
      this.shoppingCart.splice(indexProduct, 1);
      this.postLocalStorage(this.shoppingCart);
      this.myCart.next(this.shoppingCart);
    }
  }
}
