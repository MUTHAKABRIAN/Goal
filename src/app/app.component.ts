import { Component } from '@angular/core';
import {Goal}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
goals:string[];

constructor(){
  this.goals = ['Watching Finding Nemo', 'Buy Cookies', 'Get new phone case']
}
}
