import { Component, Input } from '@angular/core';

@Component({
    selector: 'user-badge',
    templateUrl: './user-badge.component.html',
    styleUrls: ['./user-badge.component.css']
})

export class UserBadgeComponent {
  @Input() name: string;
  @Input() img: string;
  @Input() selected: string;
  //@Output() deleteRequest = new EventEmitter<Hero>();

  constructor() {

  }
}
