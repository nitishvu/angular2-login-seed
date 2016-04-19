import { Component, Input } from 'angular2/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
    selector: 'user-badge',
    templateUrl: 'client/users/user-badge.component.html',
    styleUrls: ['client/users/user-badge.component.css'],
    directives: [MD_CARD_DIRECTIVES]
})

export class UserBadgeComponent {
  @Input() name: string; 
  @Input() img: string;
  @Input() selected: string;
  //@Output() deleteRequest = new EventEmitter<Hero>();
   
  constructor() {

  }
}