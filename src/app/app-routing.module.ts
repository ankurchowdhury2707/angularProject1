import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app1/home/home.component';
import { LoginComponent } from '../app1/login/login.component';
import { RegisterComponent } from '../app1/register/register.component';
import { Demo1Component } from '../app1/demo1/demo1.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"loginPage",component:LoginComponent},
  {path:"registerPage",component:RegisterComponent},
  {path:"**", component:Demo1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
