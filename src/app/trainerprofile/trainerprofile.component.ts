import { Component, OnInit } from '@angular/core';
import { Trainings } from '../model/trainings';
import { SearchService } from '../sevices/search.service';

@Component({
  selector: 'app-trainerprofile',
  templateUrl: './trainerprofile.component.html',
  styleUrls: ['./trainerprofile.component.css']
})
export class TrainerprofileComponent implements OnInit {
trainings:Trainings[];
 
  constructor(private searchService:SearchService) { }

  ngOnInit() {
    this.searchService.search().subscribe(data=>{this.trainings=data;});
    
  }

}
