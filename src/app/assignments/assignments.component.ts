import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})


export class AssignmentsComponent implements OnInit {
  title:string = 'Site de devoirs';

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.ajoutActive = true;
    // }, 2000);
  };

  // onAddAssignmentBtnClick() {
  //   this.formVisible = true;
  // }

  // assignmentClique(assignment:Assignment) {
  //   this.assignmentSelectionne = assignment;
  // }

  // Déclarer un tableau qui contient tous les assignements

}

