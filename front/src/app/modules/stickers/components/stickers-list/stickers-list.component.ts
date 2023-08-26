import { Component, OnDestroy, OnInit } from '@angular/core';
import { StickersService } from '../../services/stickers.service';
import { ISticker } from 'src/app/core/interfaces/sticker.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-stickers-list',
  templateUrl: './stickers-list.component.html',
  styleUrls: ['./stickers-list.component.scss'],
})
export class StickersListComponent implements OnInit, OnDestroy {
  stickers$: ISticker[] = [];
  private stickersSubscription!: Subscription;
  constructor(private stickersService: StickersService) {}

  ngOnInit(): void {
    this.stickersSubscription = this.stickersService
      .getAll()
      .subscribe((stickers) => {
        this.stickers$ = stickers;
      });
  }
  ngOnDestroy(): void {
    if (this.stickersSubscription) {
      this.stickersSubscription.unsubscribe();
    }
  }
}
