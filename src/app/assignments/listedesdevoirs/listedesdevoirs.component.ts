import { Component, OnInit } from '@angular/core';
import { Task } from '../../Interfaces/Tasks';
import { TasksService } from '../../services/tasks.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listedesdevoirs',
  templateUrl: './listedesdevoirs.component.html',
  styleUrls: ['./listedesdevoirs.component.css']
})
export class ListedesdevoirsComponent implements OnInit {
  tasks: Task[] = [];
  showAddTask!:boolean;
  subscription: Subscription;

  constructor(public taskService: TasksService,public uiService:UiService){
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddTask = value));
  }

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
  toggleRendu(task: Task) {
    task.rendu = !task.rendu;
    this.taskService
    .updateTaskRendu(task)
    .subscribe();
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
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

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

}
