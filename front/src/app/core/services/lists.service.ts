import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, of, tap } from 'rxjs';
import { IList } from 'src/app/core/interfaces/list.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  constructor(private http: HttpClient) {}

  private listsChangesSubject = new Subject<void>();

  get listsChanges$(): Observable<void> {
    return this.listsChangesSubject.asObservable();
  }

  addList(list: Omit<IList, 'id'>): Observable<any> {
    return this.http.post('http://localhost:3000/lists', list).pipe(
      tap(() => {
        this.listsChangesSubject.next();
      }),
      catchError((err) => {
        console.log(`error:  ${err}`);
        return of();
      })
    );
  }

  getAll(): Observable<IList[]> {
    return this.http.get<IList[]>('http://localhost:3000/lists');
  }
}
