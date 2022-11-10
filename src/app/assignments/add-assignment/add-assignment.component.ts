import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Interfaces/Tasks';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})

export class AddAssignmentComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  
  id!:string;
  nom!: string;
  DateDeRendu!:Date;
  rendu!:boolean;
  reminder!:boolean;
  showAddTask!: boolean;
  subscription : Subscription;

  // UIService permet de montrer et de cacher les modules d'ajout et de suppression de tâches

  constructor(public uiService:UiService){
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }
  
  onSubmit(){
    if (!this.nom){
      alert('Veuillez ajouter un nom de devoir.');
      return;
    }
    if (!this.DateDeRendu){
      alert('Veuillez ajouter une date de rendu.');
      return;
    }

    const newTask = { 
      id:this.id,
      identifiant:Math.floor(Math.random()*1000),
      nom:this.nom,
      DateDeRendu:this.DateDeRendu,
      rendu:this.rendu,
      reminder:this.reminder
    }
    this.onAddTask.emit(newTask);
  }


}