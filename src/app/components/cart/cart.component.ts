import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

// interface
import { Product } from 'src/app/interfaces/product.interface';

// services
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  private sub$!: Subscription;

  constructor(
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((data) => {
      this.products = data;
    });
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
