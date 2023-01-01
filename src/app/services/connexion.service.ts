import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { Connexion } from '../Interfaces/Connexion';
import { IToken } from '../Interfaces/IToken';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  url = 'http://localhost:8010/api'
  Connexion!: Connexion;

  constructor(private http: HttpClient) { }

  getlogin(): Observable<Connexion[]> {
    return this.http.get<Connexion[]>(this.url);
  }


  login(Connexion:Connexion):Observable<ArrayBuffer>{
    console.log(Connexion.password)
    console.log(Connexion.utilisateur)
    return this.http.post<ArrayBuffer>(this.url+'/login',Connexion)
  }

  addConnexion(Connexion:Connexion):Observable<Connexion>{
    return this.http.post<Connexion>(this.url,Connexion)
  }
}
