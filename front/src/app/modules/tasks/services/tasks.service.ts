import { Injectable } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
  catchError,
  of,
  tap,
  retry,
  take,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITask } from 'src/app/core/interfaces/task.interface';
import { BACKEND_URl } from '@constants';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasksSubject: BehaviorSubject<ITask[]> = new BehaviorSubject<ITask[]>(
    []
  );

  constructor(private http: HttpClient) {
    this.fetchTasks();
  }

  getAll(): Observable<ITask[]> {
    return this.tasksSubject.asObservable();
  }

  addTask(task: Omit<ITask, 'id'>): void {
    this.http
      .post(`${BACKEND_URl}/tasks`, task)
      .pipe(
        tap(() => this.fetchTasks()),
        catchError((err) => {
          console.log(`error:  ${err}`);
          return of();
        }),
        take(1)
      )
      .subscribe();
  }

  private fetchTasks(): void {
    this.http
      .get<ITask[]>(`${BACKEND_URl}/tasks`)
      .pipe(
        retry({
          count: 2,
          delay: 3000,
        }),
        take(1)
      )
      .subscribe((tasks) => {
        this.tasksSubject.next(tasks);
      });
  }
}
