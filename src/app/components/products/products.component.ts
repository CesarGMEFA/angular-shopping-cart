import { Component, OnInit } from '@angular/core';

// interface
import { Product } from 'src/app/interfaces/product.interface';

// services
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  date = new Date('2022, 09, 16')

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
  }

  onAddToShoppingCart(p: Product) {
    this.storeService.addProductToShoppingCart(p)
  }

  ngOnInit(): void {
    this.productsService.getAllProducts(0, 20).subscribe(data => {
      this.products = data
    })
  }


}
