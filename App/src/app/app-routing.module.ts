import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//import components
import {Login} from '../pages/login/login';
import {Register} from '../pages/register/register';
import {Home} from '../pages/home/home';
import {Settings} from '../pages/settings/settings';
import {Profile} from '../pages/profile/profile';
import {Calender} from '../pages/calender/calender';
import {Index} from '../pages/home-index/home-index';
import {MyApp} from './app.component';
import {HomeSelf} from '../pages/home/home-self/home.self';
import {HomeSocial} from '../pages/home/home-social/home.social';

const appRoutes : Routes = [
    {path : '',component:MyApp},
    {path : 'login',component : Login},
    {path : 'register',component : Register},
    {path : 'home',component : Home},
    {path : 'settings',component : Settings},
    {path : 'profile',component : Profile},
    {path : 'calender',component : Calender},
    {path : 'index',component : Index},
    {path : 'home-self',component:HomeSelf},
    {path : 'home-social',component:HomeSocial},
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