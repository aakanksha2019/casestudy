import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../sevices/alert.service';
import { TechnologyService } from '../sevices/technology.service';
import { Technology } from '../model/technology';
import { _getOptionScrollPosition } from '@angular/material/core';
@Component({
  selector: 'app-admintech',
  templateUrl: './admintech.component.html',
  styleUrls: ['./admintech.component.css']
})
export class AdmintechComponent implements OnInit {
  addtechnologiesform: FormGroup;
  technology:Technology[];
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private technologyservice:TechnologyService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.addtechnologiesform= this.formBuilder.group({
      name: ['', Validators.required],
      description:['', Validators.required]
    });
    this.getAll();
  }

  getAll(){
    this.technologyservice.getAll().subscribe(data=>{this.technology=data;});
  }
  get f() { return this.addtechnologiesform.controls; }
  submit(){
    if (this.addtechnologiesform.invalid) {
      return;
  }
    this.technologyservice.register(this.addtechnologiesform.value)
    .subscribe(result=>{if(result){
                        this.getAll();
    }},
    error => {
      this.alertService.error(error);
     });
    }
    remove(id:number){
      console.log("remove");
      this.technologyservice.delete(id).subscribe(result=>{
        
        if(result){
          this.getAll();}
        });
    }
  
    // getthelist(){
    //   location.reload(true);
    // }
}
