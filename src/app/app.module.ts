import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {HttpClientModule} from '@angular/common/http';
import { MatComponent } from './matcomponents/matcomponents.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { JsonworkComponent } from './jsonwork/jsonwork.component';
import {FetchdataService} from './fetchdata.service';
const appRoutes: Routes = [
  {path: '', component: MatComponent},
  {path: 'json', component: JsonworkComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MatComponent,
    HeaderComponent,
    JsonworkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    HttpClientModule

  ],
  providers: [FetchdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
