import { Component, OnInit } from '@angular/core';
import { TrainingsService } from '../sevices/trainings.service';
import { Trainings } from '../model/trainings';

@Component({
  selector: 'app-searchtrainings',
  templateUrl: './searchtrainings.component.html',
  styleUrls: ['./searchtrainings.component.css']
})
export class SearchtrainingsComponent implements OnInit {
  training :Trainings[];
  constructor(private trainingservice:TrainingsService) { }

  ngOnInit() {
    this.showlist();
    
  }
  showlist()
  {
  this.trainingservice.getAll().subscribe(data=>{this.training=data;});
  console.log(this.training);
  }
}
