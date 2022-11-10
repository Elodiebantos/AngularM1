import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
  opened = false;
  
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

}
