import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private router:Router) { }

  saveToken(token: string):void{ //permet de rediriger après connexion sur la page d'accueil
    localStorage.setItem('token',token)
    this.router.navigate(['/home'])
  }

  isLogged():boolean{ //permet de définir si on est authentifié
    const token = localStorage.getItem('token')
    return !! token //!! transforme une variable en booléen
  }
}
