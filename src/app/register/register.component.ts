import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../sevices/user.service';
import { AlertService } from '../sevices/alert.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AuthService } from '../sevices/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
    isSame=true;
    error: '';
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private userService: UserService,
      private alertService: AlertService,
      private authService: AuthService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstname: ['', Validators.required],
          lastname:['', Validators.required],
          username: ['', [Validators.required,Validators.email]],
          phone: ['', [Validators.required,Validators.maxLength(10)]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          role:['user']
          //password1: ['', [Validators.required, Validators.minLength(6)]]
      });
      /*this.registerForm.get('password1').valueChanges.subscribe(value=>{
          if (value!=this.registerForm.get('password'))
          {
                this.isSame=false;
          }
          else
          this.isSame=true;
      })*/
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  submit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      this.authService.register(this.registerForm.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('Registration successful', true);
                  this.router.navigate(['/login']);
              },
              error => {
                  this.alertService.error(error);
                this.error = error;
                  this.loading = false;
              });
  }
}
 


