import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'map-component',
  templateUrl: 'client/map/map.component.html',
  styleUrls: ['client/home-root/home-root.component.css']
})

export class MapComponent{
  lat:String;
  long:String;
  
  constructor(
    private _router: Router) {
    // this.lat = "37.7833";
    // this.long = "125.4167";
    
    // Set to San Francisco
    this.lat = "37.7833";
    this.long = "-122.4167";
  }
  
  title = 'Map Component'
}