import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { Connexion } from '../Interfaces/Connexion';
import { IToken } from '../Interfaces/IToken';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  url = 'http://localhost:5000/login'
  Connexion!: Connexion;

  constructor(private http: HttpClient) { }

  getlogin(): Observable<Connexion[]> {
    return this.http.get<Connexion[]>(this.url);
  }

  login(Connexion:Connexion):Observable<IToken>{
    return this.http.post<IToken>(this.url, Connexion)
  }

  addConnexion(Connexion:Connexion):Observable<Connexion>{
    return this.http.post<Connexion>(this.url,Connexion)
  }
}
