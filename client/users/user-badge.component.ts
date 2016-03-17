import { Component, Input } from 'angular2/core';

@Component({
    selector: 'user-badge',
    templateUrl: 'client/users/user-badge.component.html',
    styleUrls: ['client/users/user-badge.component.css']
})

export class UserBadgeComponent {
  @Input() name: string; 
  @Input() img: string;
  @Input() selected: string;
  //@Output() deleteRequest = new EventEmitter<Hero>();
   
  constructor() {

  }
}