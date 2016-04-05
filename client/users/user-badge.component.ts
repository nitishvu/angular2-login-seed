import { Component, Input } from 'angular2/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';

@Component({
    selector: 'user-badge',
    templateUrl: 'client/users/user-badge.component.html',
    styleUrls: ['client/users/user-badge.component.css'],
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