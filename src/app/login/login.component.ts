import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../services/connexion.service';
import { Connexion } from '../Interfaces/Connexion';
import { IToken } from '../Interfaces/IToken';
import { TokenService } from '../services/token.service';
import {MenuComponent} from "../menu/menu.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  utilisateur!:any;
  password!:any;

  newConnexions:Connexion[] = []; //On crée un tableau dans lequel on va stocker les valeurs des nouvelles connexions

  connexion!: Connexion; //On récupère l'interface connexion

  constructor(private connexionservice:ConnexionService, private tokenservice:TokenService) { }

  ngOnInit(): void { //On récupère à chaque tentative de connexion les données de connexion
    this.connexionservice.getlogin()
    .subscribe((newConnexions) => (this.newConnexions) = newConnexions
    );
  }

  onNewConnexion(newConnexion:Connexion){ //Si on clique sur "S'inscrire"
    if (!this.utilisateur){ //Si on a pas rempli le nom d'utilisateur
      alert('Veuillez ajouter un numéro étudiant');
      return;
    }
    if (!this.password){ //Si on a pas rempli le mot de passe
      alert('Veuillez ajouter un mot de passe.');
      return;
    }
    console.log("je suis la")
    this.connexion = {utilisateur:this.utilisateur, password:this.password};
    this.connexionservice.addConnexion(this.connexion).subscribe((connexion) => (this.newConnexions.push(connexion)));
    alert('Vous êtes bien inscrit !');
    // reload the page to see the new user
    window.location.reload();

  }

  onSubmit():void{
    if (!this.utilisateur){ //Si on a pas rempli le nom d'utilisateur
      alert('Veuillez ajouter un numéro étudiant');
      return;
    }
    if (!this.password){ //Si on a pas rempli le mot de passe
      alert('Veuillez ajouter un mot de passe.');
      return;
    }
    this.connexion = {utilisateur:this.utilisateur, password:this.password}; //On récupère les données de connexion
    this.connexionservice.login(this.connexion).subscribe(
      data => {
        this.tokenservice.saveToken(data.toString());
        this.tokenservice.saveUser(this.utilisateur);

        console.log(data);
      },
      (err) => console.log(err)
    )
  }

  printRequest(){
    console.log(this.connexion);
  }
}
