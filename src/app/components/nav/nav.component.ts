import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  showMenu = false
  counter = 0
  private sub$!: Subscription;

  constructor(
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe( d => {
      this.counter = d.length
      console.log(`Cambiando => ${d.length}`)
    })
  }

  toggleMenu() {
    this.showMenu = !this.showMenu
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

}
