import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpldetailsComponent } from './empldetails/empldetails.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule ,Validator} from '@angular/forms';
import {  MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomepageComponent,
    AboutComponent,
    UserComponent,
    EmplistComponent,
    EmpldetailsComponent,
    FormsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,MatFormFieldModule, MatInputModule,ReactiveFormsModule,MatButtonModule,MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
