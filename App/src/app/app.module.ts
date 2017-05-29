import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {ReactiveFormsModule} from '@angular/forms';
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
import {Index} from '../pages/home-index/home-index';
import {HomeSelf} from '../pages/home/home-self/home.self';
import {HomeSocial} from '../pages/home/home-social/home.social';
import {NewGoal} from '../pages/goal/new/goal.new';
import {NewSchedule} from '../pages/schedule/new/schedule.new';
import {NewTask} from '../pages/task/new/task.new';

//import services
import {CountryService} from '../services/country.service';

@NgModule({
  declarations: [
    MyApp,
    Login,
    Register,
    Home,
    Settings,
    Profile,
    Calender,
    Register,
    Index,
    HomeSelf,
    HomeSocial,
    NewGoal,
    NewSchedule,
    NewTask
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewGoal,
    NewSchedule,
    NewTask
  ],
  providers: [
    CountryService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
