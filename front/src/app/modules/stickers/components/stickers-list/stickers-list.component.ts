import { Component, OnInit } from '@angular/core';
import { StickersService } from '../../services/stickers.service';
import { ISticker } from 'src/app/core/interfaces/sticker.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stickers-list',
  templateUrl: './stickers-list.component.html',
  styleUrls: ['./stickers-list.component.scss'],
})
export class StickersListComponent implements OnInit {
  stickers$: ISticker[] = [];
  constructor(private stickersService: StickersService) {}

  ngOnInit() {
    this.stickersService.getAll().subscribe((stickers) => {
      this.stickers$ = stickers;
    });
  }
}
