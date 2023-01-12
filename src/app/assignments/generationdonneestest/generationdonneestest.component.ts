import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generationdonneestest',
  templateUrl: './generationdonneestest.component.html',
  styleUrls: ['./generationdonneestest.component.css']
})
export class GenerationdonneestestComponent implements OnInit {

  selected !:String;

  constructor() { }

  ngOnInit(): void {
  }

  Onclick(){
    alert("Vous avez bien ajouté cette information à votre agenda");
    location.reload();
  }


  //Appel des services de création d'un brouillon
  
}
