import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, retry, of } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { ISticker } from 'src/app/core/interfaces/sticker.interface';

@Injectable({
  providedIn: 'root',
})
export class StickersService {
  private stickersSubject: BehaviorSubject<ISticker[]> = new BehaviorSubject<
    ISticker[]
  >([]);

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  getAll(): Observable<ISticker[]> {
    return this.stickersSubject.asObservable();
  }

  addSticker(sticker: ISticker): void {
    this.http
      .post('http://localhost:3000/stickers', sticker)
      .pipe(
        tap(() => {
          this.fetchData();
        }),
        catchError((err) => {
          console.error(`error ${err}`);
          return of();
        }),
        take(1)
      )
      .subscribe();
  }
  deleteSticker(sticker: ISticker): void {
    this.http
      .delete(`http://localhost:3000/stickers/${sticker.id}`)
      .pipe(
        tap(() => {
          this.fetchData();
        }),
        catchError((err) => {
          console.error(`error ${err}`);
          return of();
        }),
        take(1)
      )
      .subscribe();
  }
  private fetchData(): void {
    this.http
      .get<ISticker[]>('http://localhost:3000/stickers')
      .pipe(
        retry({
          count: 2,
          delay: 3000,
        }),
        take(1)
      )
      .subscribe((lists) => {
        this.stickersSubject.next(lists);
      });
  }
}
