import { Component, OnInit } from '@angular/core';
import { Trainings } from '../model/trainings';
import { TrainingsService } from '../sevices/trainings.service';

@Component({
  selector: 'app-trainercompleted',
  templateUrl: './trainercompleted.component.html',
  styleUrls: ['./trainercompleted.component.css']
})
export class TrainercompletedComponent implements OnInit {
  training:Trainings[];
  constructor(private trainingservice:TrainingsService,) { }
  currentUser = JSON.parse(localStorage.getItem('username'));
  userid=this.currentUser.id;
  

  ngOnInit() {
    this.trainingservice.completed(this.userid).subscribe(data=>{this.training=data;});
  }


}
