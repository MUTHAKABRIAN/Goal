import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[] =[
    {id: 1, name: 'Watch finding Nemo'},
    {id: 2, name: 'buy cookies'},
    {id: 3, name:'Get new phone case'},
    {id: 4, name:'get dog food'},
    {id: 5, name: 'solve math homework'},
    {id: 6, name:'plot for my world domination plan'},
  ];

  constructor() { }

  ngOnInit(){
  }

}
