import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './AuthGuard/authentication.guard';
import { ArchieveComponent } from './components/archieve/archieve/archieve.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { IconsComponent } from './components/icons/icons/icons.component';
import { LoginComponent } from './components/login/login.component';
import { NotesComponent } from './components/notes/notes.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { TrashComponent } from './components/trash/trash/trash.component';
import { AuthguardServiceService } from './services/authguardService/authguard-service.service';

const routes: Routes = [
  
 
  {path: 'register', component:RegistrationComponent},
  {path:'',redirectTo:"/login",pathMatch:"full"},
  {path: 'login', component:LoginComponent},
  //{path:'icons', component:IconsComponent},
  {path: 'forgotpassword', component:ForgotpasswordComponent},
  {path: 'resetpassword', component:ResetpasswordComponent},
  {path: 'dashboard', component:DashboardComponent,canActivate:[AuthenticationGuard],
    children:[
      {path:'notes', component:GetallnotesComponent},
      {path:'trash',component:TrashComponent},
      {path:'archieve',component:ArchieveComponent}
    ]
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
