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
    new Goal(1, 'Watching finding Nemo','Finding an online version and watch merlin find his son',new Date(2020,3,14) ),
    new Goal(2, 'Get new phone case ', 'Diana has her birthday coming up soon', new Date(2019,9,6)),
    new Goal(3, 'Get dog food','puppy likes expensive snacks', new Date(2010,4,3)),
    new Goal(4, 'solve math problem', 'damn math', new Date(2018,7,8)),
    new Goal(5, 'plot my world domination plan','cause I am Victorious',new Date(2020,12,12))
  ];
  toggleDetails(index){
    this.goals[index].showDescription =!this.goals[index].showDescription;
  }
  completeGoal(isComplete,index){
    if (isComplete){
      this.goals.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}