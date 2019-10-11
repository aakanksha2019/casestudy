import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavgComponent } from './navg/navg.component';
import { CurrenttrainComponent } from './currenttrain/currenttrain.component';
import { UsersComponent } from './users/users.component';
import { UsersmenuComponent } from './usersmenu/usersmenu.component';
import { RegtrainComponent } from './regtrain/regtrain.component';
import { AuthguardService } from './guard';
import {UsersearchComponent} from './usersearch/usersearch.component';
import{UserprogressComponent} from './userprogress/userprogress.component'
import{UsercompletedComponent} from './usercompleted/usercompleted.component';
import {TrainerprofileComponent} from './trainerprofile/trainerprofile.component';
import {AdminComponent} from './admin/admin.component';
import {AdminblockComponent} from './adminblock/adminblock.component';
import {AdmintechComponent} from './admintech/admintech.component';
import { TrainersmenuComponent } from './trainersmenu/trainersmenu.component';
import { AuthService } from './sevices/auth.service';
import { SearchtrainingsComponent } from './searchtrainings/searchtrainings.component';
import { TrainerprogressComponent } from './trainerprogress/trainerprogress.component';
import { TrainercompletedComponent } from './trainercompleted/trainercompleted.component';
const routes: Routes = [
  {path:'',component:NavgComponent},
  {path:'',redirectTo:'usersmenu',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'navg',component:NavgComponent},
  {path:'usercurrent',component:CurrenttrainComponent},
  {path:'usersmenu',component:UsersmenuComponent,canActivate:[AuthguardService]},
  {path:'regtrain',component:RegtrainComponent},
  {path:'usersearch',component:UsersearchComponent},
  {path:'userprogress',component:UserprogressComponent},
  {path:'usercompleted',component:UsercompletedComponent},
  {path:'profile',component:TrainerprofileComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthguardService]},
 {path:'adminblock',component:AdminblockComponent},
 {path:'admintech',component:AdmintechComponent},
 {path:'trainersmenu',component:TrainersmenuComponent,canActivate:[AuthguardService]},
 {path:'currenttrain',component:CurrenttrainComponent},
 {path:'searchtrainings',component:SearchtrainingsComponent},
 {path:'trainercurrent',component:TrainerprogressComponent},
 {path:'trainercompleted',component:TrainercompletedComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
