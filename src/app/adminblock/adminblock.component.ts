import { Component, OnInit } from '@angular/core';
import {UserService} from '../sevices/user.service';
import { User } from '../model';
 @Component({
  selector: 'app-adminblock',
  templateUrl: './adminblock.component.html',
  styleUrls: ['./adminblock.component.css']
})
export class AdminblockComponent implements OnInit {
  user:User[];
  constructor(private usersService:UserService) { }

  ngOnInit() {
      // this.usersService.getAll().subscribe(data=>{this.user=data;});
      this.getAll();
    }
    getAll(){
      this.usersService.getAll().subscribe(data=>{this.user=data;});
    }
  
public blocked(id:number){

    this.usersService.blocked(id).subscribe(res => {
this.getAll();
    });
  }
  public unblocked(id:number){
   
      this.usersService.unblocked(id).subscribe(res => {
this.getAll();
      });
    }
}

