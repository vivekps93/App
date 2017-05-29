import {Component} from '@angular/core';
import {HomeSelf} from '../home/home-self/home.self';
import {HomeSocial} from '../home/home-social/home.social';

@Component({
    templateUrl : 'home-index.html'
})
export class Index{
    Self : any;
    Social : any;

    constructor(){
        this.Self = HomeSelf;
        this.Social = HomeSocial;
    }
}