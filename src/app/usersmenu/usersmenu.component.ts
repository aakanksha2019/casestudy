import { Component, OnInit } from '@angular/core';
import { AuthService } from '../sevices/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { TrainingsService } from '../sevices/trainings.service';
import { Trainings } from '../model/trainings';

@Component({
  selector: 'app-usersmenu',
  templateUrl: './usersmenu.component.html',
  styleUrls: ['./usersmenu.component.css']
})
export class UsersmenuComponent implements OnInit {
  error = '';
  currentUser = JSON.parse(localStorage.getItem('username'));
 userid=this.currentUser.id;
  constructor( private router: Router,
              private authService: AuthService,
              private trainings:TrainingsService) { }


  ngOnInit() {
    
  }
  training:Trainings[];
  searchtrainings()
  {
    this.router.navigate(['/searchtrainings']);
  }
current()
{
  this.router.navigate(['/userprogress']);
}
completed()
{
  this.router.navigate(['/usercompleted']);
}
logout()
{
  this.authService.logout();
        
}
}
