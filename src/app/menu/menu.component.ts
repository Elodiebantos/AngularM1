import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenService} from "../services/token.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
  opened = false;
  user: any;



  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  goHome(){
    this.router.navigateByUrl('/home');
  }

  connect(){
    this.router.navigateByUrl('/login');
  }

  Connexion(){
    return this.Connexion;
  }

  GetUser(){
    if (TokenService.isLogged()) {
      this.user = TokenService.getInfos();
      console.log("ICICIICICICI" + this.user);
    }

  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }

  isLogged(){
    console.log("LALLALALAL" + TokenService.isLogged());
  return TokenService.isLogged();
  }


}
