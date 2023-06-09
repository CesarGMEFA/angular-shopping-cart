import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imgParent = 'https://www.w3schools.com/howto/img_avatar.png';
  showImg = true

  constructor() {
    this.existenceLocalStorage()
  }

  loadedFather(img: string) {
    console.log('father log', img)
  }

  toggleImg() {
    this.showImg = !this.showImg
  }

  existenceLocalStorage() {
    !localStorage.getItem('shopping_cart') && localStorage.setItem('shopping_cart', '[]')
  }
}
