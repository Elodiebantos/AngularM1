import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../services/connexion.service';
import { Connexion } from '../Interfaces/Connexion';
import { IToken } from '../Interfaces/IToken';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  id!:any;
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
    if (!this.id){ //Si on a pas rempli le nom d'utilisateur
      alert('Veuillez ajouter un numéro étudiant');
      return;
    }
    if (!this.password){ //Si on a pas rempli le mot de passe
      alert('Veuillez ajouter un mot de passe.');
      return;
    }
    this.connexionservice.addConnexion(newConnexion).subscribe((newConnexion) => (this.newConnexions.push(newConnexion))); 
    //On rentre la donnée de connexion en passant par notre service (qui lui-même passe par la database json)
  }

  onSubmit():void{
    if (!this.id){ //Si on a pas rempli le nom d'utilisateur
      alert('Veuillez ajouter un numéro étudiant');
      return;
    }
    if (!this.password){ //Si on a pas rempli le mot de passe
      alert('Veuillez ajouter un mot de passe.');
      return;
    }
    console.log()
    this.connexionservice.login(this.connexion).subscribe(
      data => {
        console.log(data.access_token),
        this.tokenservice.saveToken(data.access_token)
      },
      (err) => console.log(err)
    )
  }
}
