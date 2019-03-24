import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { App1RoutingModule } from './app1-routing.module';
import { App1Component } from './app1.component';
import { Demo1Component } from './demo1/demo1.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    App1Component,
    Demo1Component,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    App1RoutingModule
  ],
  providers: [],
  bootstrap: [App1Component]
})
export class App1Module { }
