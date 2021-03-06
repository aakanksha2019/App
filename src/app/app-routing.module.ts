import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [ 
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'display',component:DisplayComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
