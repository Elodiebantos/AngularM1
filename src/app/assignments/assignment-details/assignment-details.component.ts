import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Interfaces/Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.css']
})


export class AssignmentDetailsComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task:Task){
    this.onToggleReminder.emit(this.task);
  }

}
