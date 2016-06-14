import { Component, Input } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
    selector: 'quick-card',
    templateUrl: 'src/shared/components/quick-card/quick-card.component.html',
    styleUrls: ['src/shared/components/quick-card/quick-card.component.css'],
    directives: [MD_CARD_DIRECTIVES]
})

export class QuickCardComponent {
  @Input() name: string; 
  @Input() img: string;
  @Input() selected: string;
  //@Output() deleteRequest = new EventEmitter<Hero>();
   
  constructor() {

  }
}