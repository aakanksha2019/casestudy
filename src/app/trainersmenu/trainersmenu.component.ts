import { Component, OnInit } from '@angular/core';
import { AuthService } from '../sevices/auth.service';
import { Router } from '@angular/router';
import { TrainingsService } from '../sevices/trainings.service';

@Component({
  selector: 'app-trainersmenu',
  templateUrl: './trainersmenu.component.html',
  styleUrls: ['./trainersmenu.component.css']
})
export class TrainersmenuComponent implements OnInit {

  constructor(private authService:AuthService,
              private router:Router,
              private trainings:TrainingsService) { }

  ngOnInit() {
  }
  current()
  {
    this.router.navigate(['trainercurrent']);
  }
  completed()
{
  this.router.navigate(['/trainercompleted']);
}
logout(){
  this.authService.logout();
}
}
