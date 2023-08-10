import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ISticker } from 'src/app/core/interfaces/sticker.interface';

@Injectable({
  providedIn: 'root',
})
export class StickersService {
  private stickersChangesSubject = new Subject<void>();

  constructor(private http: HttpClient) {}

  get stickersChanges$(): Observable<void> {
    return this.stickersChangesSubject.asObservable();
  }

  getAll(): Observable<ISticker[]> {
    return this.http.get<ISticker[]>('http://localhost:3000/stickers').pipe(
      catchError((err) => {
        console.error(`error ${err}`);
        return of([]);
      })
    );
  }

  addSticker(sticker: ISticker): Observable<any> {
    return this.http.post('http://localhost:3000/stickers', sticker).pipe(
      tap(() => {
        this.stickersChangesSubject.next();
      }),
      catchError((err) => {
        console.error(`error ${err}`);
        return of();
      })
    );
  }
  deleteSticker(sticker: ISticker): Observable<any> {
    return this.http
      .delete(`http://localhost:3000/stickers/${sticker.id}`)
      .pipe(
        tap(() => {
          this.stickersChangesSubject.next();
        }),
        catchError((err) => {
          console.error(`error ${err}`);
          return of();
        })
      );
  }
}
