import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) {
  }

  saveToken(token: string): void { //permet de rediriger après connexion sur la page d'accueil
    localStorage.setItem('token', JSON.stringify(token))
    this.router.navigate(['/home'])
  }

  saveUser(user: string): void { //permet de rediriger après connexion sur la page d'accueil
    localStorage.setItem('user', JSON.stringify(user))
  }

  static getUser(): any { //permet de récupérer les infos de l'utilisateur
    return localStorage.getItem('user')
    }

  static isLogged(): boolean { //permet de définir si on est authentifié
    const token = localStorage.getItem('token')
    return !!token //!! transforme une variable en booléen
  }

  static getInfos(): any { //permet de récupérer les infos de l'utilisateur
    const token = localStorage.getItem('token')
    if (token) {
      const toto = JSON.parse(token)
      console.log("TOTOTOTOOT" + toto.toString())
      var res = toto.split(".")
      return toto
    }
  }
}
