import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//import modules
import {AppRoutingModule} from './app-routing.module';

//import components
import {Login} from '../pages/login/login';
import {Register} from '../pages/register/register';
import {Home} from '../pages/home/home';
import {Settings} from '../pages/settings/settings';
import {Profile} from '../pages/profile/profile';
import {Calender} from '../pages/calender/calender';

@NgModule({
  declarations: [
    MyApp,
    Login,
    Register,
    Home,
    Settings,
    Profile,
    Calender
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
