import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[] =[
    new Goal(1, 'Watching finding Nemo','Finding an online version and watch merlin find his son'),
    new Goal(2, 'Get new phone case ', 'Diana has her birthday coming up soon'),
    new Goal(3, 'Get dog food','puppy likes expensive snacks'),
    new Goal(4, 'solve math problem', 'damn math'),
    new Goal(5, 'plot my world domination plan','cause I am Victorious')
  ];

  constructor() { }

  ngOnInit() {
  }

}