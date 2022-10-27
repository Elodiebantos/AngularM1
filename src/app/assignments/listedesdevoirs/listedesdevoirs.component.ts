import { Component, OnInit } from '@angular/core';
import { Task } from '../../Interfaces/Tasks';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-listedesdevoirs',
  templateUrl: './listedesdevoirs.component.html',
  styleUrls: ['./listedesdevoirs.component.css']
})
export class ListedesdevoirsComponent implements OnInit {
  tasks: Task[] = [];

  constructor(public taskService: TasksService){}

  ngOnInit(): void {
    this.taskService.getTasks()
    .subscribe((tasks) => this.tasks = tasks
    );
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task.id)
      .subscribe()
  }

  // Permet à l'étudiant de demander un rappel de ses devoirs
  toggleReminder(task: Task) {
    task.rendu = !task.rendu;
    this.taskService
      .updateTaskReminder(task).subscribe();
  }

  addNewTask(task:Task){
    this.taskService
      .addTask(task)
      .subscribe(task => this.tasks.push(task));
  }

  addTask(task:Task){ 
    this.taskService
      .addTask(task).subscribe((task) => (this.tasks.push(task)));
  }

}
