import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StickersRoutingModule } from './stickers-routing.module';
import { StickersComponent } from './stickers.component';
import { StickersListComponent } from './components/stickers-list/stickers-list.component';
import { StickerComponent } from './components/sticker/sticker.component';


@NgModule({
  declarations: [
    StickersComponent,
    StickersListComponent,
    StickerComponent
  ],
  imports: [
    CommonModule,
    StickersRoutingModule
  ]
})
export class StickersModule { }
