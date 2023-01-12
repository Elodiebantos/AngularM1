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
  
  id!:number;
  auteur!:string;
  matiere!:string;
  nom!: string;
  dateDeRendu!:Date;
  rendu!:boolean;
  reminder!:boolean;
  showAddTask!: boolean;
  note!:number;
  remarque!:string;
  photoProf!:string;

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
    if (!this.dateDeRendu){
      alert('Veuillez ajouter une date de rendu.');
      return;
    }

    const newTask = { 
      id:this.id,
      auteur:this.auteur,
      nom:this.nom,
      matiere:this.matiere,
      dateDeRendu:this.dateDeRendu,
      rendu:this.rendu,
      reminder:this.reminder,
      note:this.note,
      remarque:this.remarque,
      photoProf:this.photoProf
    }
    this.onAddTask.emit(newTask);

    location.reload();
  }


}