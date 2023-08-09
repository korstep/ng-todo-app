import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StickersComponent } from './stickers.component';

const routes: Routes = [{ path: '', component: StickersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StickersRoutingModule { }
