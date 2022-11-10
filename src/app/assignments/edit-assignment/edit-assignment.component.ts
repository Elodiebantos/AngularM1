import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Interfaces/Tasks';
import { TasksService } from 'src/app/services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {
  @Input() task!: Task;

  id!:string;
  nom!: string;
  DateDeRendu!:Date;
  rendu!:boolean;
  reminder!:boolean;

  constructor(
    private taskService:TasksService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  // const task:Task = { 
  //   id:this.id,
  //   identifiant:Math.floor(Math.random()*1000),
  //   nom:this.nom,
  //   DateDeRendu:this.DateDeRendu,
  //   rendu:this.rendu,
  //   reminder:this.reminder
  // }

  getTasks() {
    const id = +this.route.snapshot.params['id'];
   
    this.taskService.getTasks().subscribe((task) => {
      if (!task) {
        alert('La tâche n\'existe pas');
        return;
      };
      // Pour pré-remplir le formulaire
      const EditionTask = { 
        id:this.id,
        identifiant:Math.floor(Math.random()*1000),
        nom:this.nom,
        DateDeRendu:this.DateDeRendu,
        rendu:this.rendu,
        reminder:this.reminder
      }
    });
  }

  onSaveAssignment() {
    if (!this.task){
      alert('Erreur dans le rendu de la tâche : la tâche n\'existe pas');
      return;
    }
 
    // on récupère les valeurs dans le formulaire
    this.task.nom = this.nom;
    this.task.DateDeRendu = this.DateDeRendu;
    this.taskService
      .updateTasks(this.task)
      // navigation vers la home page
      this.router.navigate(['/home']);;
  }
 
}
