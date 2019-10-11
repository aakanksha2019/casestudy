import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../sevices/user.service';
import { AlertService } from '../sevices/alert.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AuthService } from '../sevices/auth.service';
@Component({
  selector: 'app-regtrain',
  templateUrl: './regtrain.component.html',
  styleUrls: ['./regtrain.component.css']
})
export class RegtrainComponent implements OnInit {
  mentorReg: FormGroup;
  loading = false;
  submitted = false;
    isSame=true;
  error: '';
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private alertService: AlertService,
      private authService: AuthService) { }
  

  ngOnInit() {
  
  
  this.mentorReg = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    //  timez:['', Validators.required],
    username: ['', [Validators.required,Validators.email]],
    //  tech:['',Validators.required],
    //  facilities:['',Validators.required],
    experience: ['', Validators.required],
    phone: ['', [Validators.required,Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role:['mentor']
});
/*this.mentorReg.get('password1').valueChanges.subscribe(value=>{
    if (value!=this.mentorReg.get('password'))
    {
          this.isSame=false;
    }
    else
    this.isSame=true;
})*/
}
//toppings = new FormControl();
  toppingList: string[] = ['java','C#','Bootstrap','Machine Learning'];
  //toppings1=new FormControl();
  toppingList1:string[]=['material','Cloud Labs','email/Phno verification','LinkedIn url'];
// convenience getter for easy access to form fields
get f() { return this.mentorReg.controls; }

submit() {
this.submitted = true;

// stop here if form is invalid
if (this.mentorReg.invalid) {
    return;
}

this.loading = true;
this.authService.register(this.mentorReg.value)
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
