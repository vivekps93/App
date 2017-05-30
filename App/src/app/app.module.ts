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
import {NewGoalComponent} from '../pages/goal/new/goal.new';
import {NewSchedule} from '../pages/schedule/new/schedule.new';
import {NewTask} from '../pages/task/new/task.new';
import {GoalTimeline} from '../pages/goal/timeline/goal.timeline';
import {GoalTimelineDetail} from '../pages/goal/timeline/goal.timeline.detail';

//import services
import {CountryService} from '../services/country.service';
import {WeekService} from '../services/week.service';
import {UserService} from '../services/user.service';
import {GoalService} from '../services/goal.service';
import {ScheduleService} from '../services/schedule.service';
import {TaskService} from '../services/task.service';

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
    NewGoalComponent,
    NewSchedule,
    NewTask,
    GoalTimeline,
    GoalTimelineDetail
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
    NewGoalComponent,
    NewSchedule,
    NewTask,
    GoalTimeline,
    GoalTimelineDetail
  ],
  providers: [
    CountryService,
    WeekService,
    UserService,
    GoalService,
    ScheduleService,
    TaskService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
