import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(offset: number, limit: number) {
    // return this.http.get<Product[]>('https://fakestoreapi.com/products')
    return this.http.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products',
      { params: { offset, limit } }
    );
  }
}
