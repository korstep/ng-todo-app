import { Component, Input } from '@angular/core';
import { ISticker } from 'src/app/core/interfaces/sticker.interface';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss'],
})
export class StickerComponent {
  @Input()
  sticker!: ISticker;
}
