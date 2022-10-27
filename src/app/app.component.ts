import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment_app';
  apiURL = this.http.get('http://localhost:5000/tasks')

  constructor(private http:HttpClient){}

}
