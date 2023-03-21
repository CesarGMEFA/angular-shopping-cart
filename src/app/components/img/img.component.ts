import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent {
  img: string = '';
  defaultImg = 'https://picsum.photos/200';

  @Input()
  set changeImg(newImg: string) {
    this.img = newImg
    // console.log("change image => ",this.img)
  }

  imgError() {
    this.img = this.defaultImg;
  }

}
