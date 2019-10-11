import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../sevices/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }
public technologies(){
  this.router.navigate(["/admintech"]);
}
public listusers()
{
  this.router.navigate(["/adminblock"]);
}
  logout()
    {
      this.authService.logout();
            
    }
}

