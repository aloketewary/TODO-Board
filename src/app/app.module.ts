import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireLite } from 'angularfire-lite';
import {environment} from '../environments/environment';

import { AppComponent } from './app.component';
import { LoginComponent } from './common/components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireLite.forRoot(environment.firebase_config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
