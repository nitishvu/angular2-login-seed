import { Component, Input } from '@angular/core';
import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
    selector: 'user-badge',
    templateUrl: 'app/users/user-badge.component.html',
    styleUrls: ['app/users/user-badge.component.css'],
    directives: [MD_CARD_DIRECTIVES, MdButton]
})

export class UserBadgeComponent {
  @Input() name: string; 
  @Input() img: string;
  @Input() selected: string;
  //@Output() deleteRequest = new EventEmitter<Hero>();
   
  constructor() {

  }
}