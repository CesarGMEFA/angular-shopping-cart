import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnDestroy
{
  img: string = '';

  @Input()
  set changeImg(newImg: string) {
    this.img = newImg
    // console.log("change image => ",this.img)
  }
  @Output() loaded = new EventEmitter<string>();
  counter = 0
  counterFn: number | undefined

  defaultImg = 'https://picsum.photos/200';


  ngOnDestroy() {
    // delete
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn)
  }

  imgError() {
    this.img = this.defaultImg;
  }

  imgLoaded() {
    console.log('ha cargado');
    this.loaded.emit(this.img);
  }
}
