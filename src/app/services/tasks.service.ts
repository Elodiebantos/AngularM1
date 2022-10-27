import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Task } from '../Interfaces/Tasks';

const httpOptions = { 
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  }),

}

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  Task!:Task;

  apiUrl = 'http://localhost:5000/tasks'
  // mangoUrl = 'http://localhost:8010/api/assignments'
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl).pipe(catchError(this.handleError));
    // return this.http.get<Task[]>(this.mangoUrl).pipe(catchError(this.handleError))
  }

  deleteTask(nom: string): Observable<unknown> {
    const url = `${this.apiUrl}/${nom}`;
    // const url = `${this.mangoUrl}/${nom}`;
    return this.http.delete(url, httpOptions);
  }

  updateTaskReminder(task: Task): Observable<Task>{
    // const url = `${this.mangoUrl}?${task.nom}`;
    const url = `${this.apiUrl}/${task}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
    // return this.http.post<Task>(this.mangoUrl, task, httpOptions);
  }




  private handleError(error:any) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
