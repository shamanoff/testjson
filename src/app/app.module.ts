import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {HttpClientModule} from '@angular/common/http';
import { MatComponent } from './matcomponents/matcomponents.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {DialogDataExampleDialog, JsonworkComponent} from './jsonwork/jsonwork.component';
import {FetchdataService} from './fetchdata.service';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
const appRoutes: Routes = [
  {path: '', component: MatComponent},
  {path: 'json', component: JsonworkComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MatComponent,
    HeaderComponent,
    JsonworkComponent,
    DialogDataExampleDialog,
    SignupComponent,
    LoginComponent
  ],
  entryComponents: [DialogDataExampleDialog],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    HttpClientModule,

  ],
  providers: [FetchdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
