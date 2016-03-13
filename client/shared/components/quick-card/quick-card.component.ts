import { Component, Input } from 'angular2/core';

@Component({
    selector: 'quick-card',
    templateUrl: 'client/shared/components/quick-card/quick-card.component.html',
    styleUrls: ['client/shared/components/quick-card/quick-card.component.css']
})

export class QuickCardComponent {
  @Input() name: string; 
  @Input() img: string;
  @Input() selected: string;
  //@Output() deleteRequest = new EventEmitter<Hero>();
   
  constructor() {

  }
}