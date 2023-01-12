import { Component, OnInit } from '@angular/core';
import { Task } from '../../Interfaces/Tasks';
import { TasksService } from '../../services/tasks.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

import { BDTasks } from '../data';
@Component({
  selector: 'app-listedesdevoirs',
  templateUrl: './listedesdevoirs.component.html',
  styleUrls: ['./listedesdevoirs.component.css']
})
export class ListedesdevoirsComponent implements OnInit {
  tasks: Task[] = [];
  showAddTask!:boolean;
  subscription: Subscription;
  displayedColumns: string[] = ['auteur','matiere','nom', 'dateDeRendu','note', 'rendu', 'reminder','remarque', 'photoProf', 'supprimer' ];
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
      .deleteTask(task)
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

  addTask(task:Task, boole:Boolean){ 
    this.taskService
      .addTask(task).subscribe((task) => {this.tasks.push(task); if(boole) window.location.reload()});
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  peuplerBD(){
    const matieres = ["Anglais", "Java", "Base de données", "Développement Node", "Spring Boot", "Grails", "Italien","Portugais","Espagnol","Dév Back-end","ReactJS","Administration de serveur", "Allemand", "Développement C#", ".NET", "C++", "HTML5 / CSS3", "Javascript", "Front-end", "Développement Serveur Node", "Virtual Box", "VMware"];
    const noms = ["Examen", "TD", "TP", "Contrôle", "Leçon", "Interro Orale", "Soutenance", "Présentation", "Rapport", "Powerpoint"]
    for(let i=1; i<=1000 ;i++){
      let booleenRendu=Math.random() < 0.5;
      let noteRendu = booleenRendu? Math.floor(Math.random() * 20) : undefined
      let modulo= i>70?i%70:i;
      const newTask:Task = {
        auteur: "Hugo",
        matiere : matieres[Math.floor(Math.random() * matieres.length)],
        nom: noms[Math.floor(Math.random() * noms.length)],
        id : i,
        dateDeRendu : new Date(new Date(2023, 0, 1).getTime() + Math.random() * (new Date(2024, 0, 1).getTime() - new Date(2023, 0, 1).getTime())),
        rendu : booleenRendu,
        reminder : Math.random() < 0.5,
        note: noteRendu,
        remarque: Math.random() < 0.5? "une remarque utile" : "",
        //photoProf:"https://thispersondoesnotexist.com/image"
        photoProf:"https://i.pravatar.cc/150?img="+modulo
      }
        console.log(newTask)
        this.addTask(newTask,i==1000)
    }
  }
}
