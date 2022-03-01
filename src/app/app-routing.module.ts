import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard.service';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';


const routes: Routes = [{
  path: '',
  component: RegistrationPageComponent
},{
  path: 'profile',
  component: ProfilePageComponent,
   canActivate: [AuthGuard],
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
