import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Demo1Component } from '../app1/demo1/demo1.component';
import { HomeComponent } from '../app1/home/home.component';
import { LoginComponent } from '../app1/login/login.component';
import { RegisterComponent } from '../app1/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; /*Form are created in app1 module but still we have to add formsmodule in app why ?? */


@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
