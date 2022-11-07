import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '100%',
        opacity: 1,
        backgroundColor: 'white'
      })),
      state('closed', style({
        height: '1px',
        opacity: 0,
        backgroundColor: 'white'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ],
})
export class AccueilComponent implements OnInit {
  isOpen = false;

  

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
