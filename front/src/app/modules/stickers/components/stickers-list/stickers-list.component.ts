import { Component, OnInit } from '@angular/core';
import { StickyWallService } from '../../services/stickers.service';
import { ISticker } from 'src/app/core/interfaces/sticker.interface';

@Component({
  selector: 'app-stickers-list',
  templateUrl: './stickers-list.component.html',
  styleUrls: ['./stickers-list.component.scss'],
})
export class StickersListComponent implements OnInit {
  constructor(private stickyService: StickyWallService) {}

  stickers: ISticker[] = [];

  ngOnInit() {
    this.stickers = this.stickyService.getAll();
  }
}
