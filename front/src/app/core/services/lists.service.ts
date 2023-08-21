import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  of,
  retry,
  take,
  tap,
} from 'rxjs';
import { IList } from 'src/app/core/interfaces/list.interface';
import { HttpClient } from '@angular/common/http';
import { BACKEND_URl } from '@constants';

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  private listsSubject: BehaviorSubject<IList[]> = new BehaviorSubject<IList[]>(
    []
  );

  constructor(private http: HttpClient) {
    this.fetchLists();
  }

  addList(list: Omit<IList, 'id'>): void {
    this.http
      .post(`${BACKEND_URl}/lists`, list)
      .pipe(
        tap(() => {
          this.fetchLists();
        }),
        catchError((err) => {
          console.log(`error:  ${err}`);
          return of();
        }),
        take(1)
      )
      .subscribe();
  }

  getAll(): Observable<IList[]> {
    return this.listsSubject.asObservable();
  }

  private fetchLists(): void {
    this.http
      .get<IList[]>(`${BACKEND_URl}/lists`)
      .pipe(
        retry({
          count: 2,
          delay: 3000,
        }),
        take(1)
      )
      .subscribe((lists) => {
        this.listsSubject.next(lists);
      });
  }
}
