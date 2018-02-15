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
import {FlexLayoutModule} from '@angular/flex-layout';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { TrainingComponent } from './training/training/training.component';
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
    LoginComponent,
    SidenavListComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    TrainingComponent
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
    FlexLayoutModule

  ],
  providers: [FetchdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
