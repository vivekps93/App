import {Component,ViewChild} from '@angular/core';
import { App, MenuController,Nav } from 'ionic-angular';

import {Index} from '../home-index/home-index';
import {Settings} from '../settings/settings';
import {Profile} from '../profile/profile';
import {Calender} from '../calender/calender';

@Component({
    templateUrl:'home.html',
    styleUrls : ['/home.css'],
})
export class Home{
     @ViewChild(Nav) nav: Nav;
    rootPage  = Index;

    pages : Array<{title : string,component : any}> 

    constructor(app: App, menu: MenuController) {
        menu.enable(true);
        console.log("inside home component");

        this.pages = [
            {title : 'Home',component : Index},
            {title : 'Profile',component : Profile },
            {  title : 'Calender',component : Calender },
            { title : 'Settings',component : Settings}
        ]
    }

    opnePage(page){
        this.nav.setRoot(page.component);
    }
}