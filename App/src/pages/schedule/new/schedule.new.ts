import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
    templateUrl : 'schedule.new.html'
})
export class NewSchedule{
    constructor(private viewCtrl : ViewController){

    }
    dismiss(){
        this.viewCtrl.dismiss();
    }
}