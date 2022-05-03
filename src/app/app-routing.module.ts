import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { StepComponent } from './step/step.component';

const routes: Routes = [{
  path:'',
  component:LoginComponent
},
{
  path:'*',
  component:LoginComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'step',
  component:StepComponent,
  canActivate:[AuthGuard]
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
