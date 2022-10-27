import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Interfaces/Tasks';

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

  constructor(){}

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
      nom:this.nom,
      DateDeRendu:this.DateDeRendu,
      rendu:this.rendu,
    }

    this.onAddTask.emit(newTask);
    this.id='';
    this.nom='';
    this.DateDeRendu=new Date;
    this.rendu=false;
  }


}