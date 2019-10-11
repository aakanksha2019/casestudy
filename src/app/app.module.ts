import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavgComponent } from './navg/navg.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { UsersmenuComponent } from './usersmenu/usersmenu.component';
import { TrainersmenuComponent } from './trainersmenu/trainersmenu.component';
import { CurrenttrainComponent } from './currenttrain/currenttrain.component';
import { RegtrainComponent } from './regtrain/regtrain.component';
import{MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthService } from './sevices/auth.service';
import{HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthguardService} from './guard/authguard.service';
import { fakeBackendProvider } from './helpers';
import { JwtInterceptor,ErrorInterceptor } from './helpers';
import { UserService } from './sevices/user.service';
import { AlertService } from './sevices/alert.service';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { UserprogressComponent } from './userprogress/userprogress.component';
import { UsercompletedComponent } from './usercompleted/usercompleted.component';
import { TrainerprofileComponent } from './trainerprofile/trainerprofile.component';
import { AdminblockComponent } from './adminblock/adminblock.component';
import { AdmintechComponent } from './admintech/admintech.component';
import { AmazingTimePickerModule } from 'amazing-time-picker'; 
import { IgxTimePickerModule } from "igniteui-angular";
import { AdminComponent } from './admin/admin.component';
import { SearchtrainingsComponent } from './searchtrainings/searchtrainings.component';
import { TrainerprogressComponent } from './trainerprogress/trainerprogress.component';
import { TrainercompletedComponent } from './trainercompleted/trainercompleted.component';

@NgModule({
  declarations: [
    AppComponent,
    NavgComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    UsersmenuComponent,
    TrainersmenuComponent,
    CurrenttrainComponent,
    RegtrainComponent,
    UsersearchComponent,
    UserprogressComponent,
    UsercompletedComponent,
    TrainerprofileComponent,
    AdminblockComponent,
    AdmintechComponent,
    AdminComponent,
    SearchtrainingsComponent,
    TrainerprogressComponent,
    TrainercompletedComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AmazingTimePickerModule,
    IgxTimePickerModule
  ],
  providers: [ AuthguardService,
    AlertService,
    AuthService,
    UserService,{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
   { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  // provider used to create fake backend
  // fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }
