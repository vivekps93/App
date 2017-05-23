import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//import components
import {Login} from '../pages/login/login';
import {Register} from '../pages/register/register';
import {Home} from '../pages/home/home';
import {Settings} from '../pages/settings/settings';
import {Profile} from '../pages/profile/profile';
import {Calender} from '../pages/calender/calender';
import {MyApp} from './app.component';

const appRoutes : Routes = [
    {path : '',component:MyApp},
    {path : 'login',component : Login},
    {path : 'register',component : Register},
    {path : 'home',component : Home},
    {path : 'settings',component : Settings},
    {path : 'profile',component : Profile},
    {path : 'calender',component : Calender},
];

@NgModule({
    declarations:[],
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    entryComponents:[],
    providers:[],
    exports : [
        RouterModule
    ]
})
export class AppRoutingModule{
}