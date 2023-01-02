import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn=false;

  constructor() { }

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }

  // renvoie une promesse qui est résolue si l'utilisateur est loggué
  isAdmin() {
    const isUserAdmin = new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });
    return isUserAdmin;
  }

  /** LOGIN VALIDE
   *
   * utilisateur : 22210840
   *
   * mot de passe : titititi
   *
   *
   * utilisateur : 22210811
   *
   * mot de passe : nononono
   */

}
