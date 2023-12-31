import { Component, Input } from '@angular/core';
import { ISticker } from 'src/app/core/interfaces/sticker.interface';
import { StickersService } from '../../services/stickers.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss'],
})
export class StickerComponent {
  @Input()
  sticker!: ISticker;
  constructor(private stickersService: StickersService) {}

  handleDeleteSticker(): void {
    this.stickersService.deleteSticker(this.sticker);
  }
}
