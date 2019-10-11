import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../sevices/auth.service';
import {first} from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  constructor(private router: Router,
              private formbuilder:FormBuilder,
              private route: ActivatedRoute,
              private authService: AuthService)
                { }
currentUser: any = [];
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('username'));
    this.loginForm=this.formbuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],      
    });

    // this.authService.logout();


    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.loginForm.controls; }
  submit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
              let currentUser = JSON.parse(localStorage.getItem('username'));
              let role = currentUser.role;
              console.log(this.currentUser)
             if(role == "user"){
                this.router.navigate(['/usersmenu']);
             }
                else if(currentUser.role == "mentor"){
                this.router.navigate(['/trainersmenu']);
                }
                else if(currentUser.role == "admin")
                this.router.navigate(['/admin']);
                
            },
            error => {
                this.error = error;
                this.loading = false;
            });
}
}
