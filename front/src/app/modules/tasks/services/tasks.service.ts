import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITask } from 'src/app/core/interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  private tasksChangesSubject = new Subject<void>();

  get tasksChanges$(): Observable<void> {
    return this.tasksChangesSubject.asObservable();
  }

  addTask(task: Omit<ITask, 'id'>): Observable<any> {
    return this.http.post('http://localhost:3000/tasks', task).pipe(
      tap(() => {
        this.tasksChangesSubject.next();
      }),
      catchError((err) => {
        console.log(`error:  ${err}`);
        return of();
      })
    );
  }

  getAll(): Observable<ITask[]> {
    return this.http.get<ITask[]>('http://localhost:3000/tasks');
  }
}
