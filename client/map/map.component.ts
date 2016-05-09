import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

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