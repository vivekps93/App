import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
    templateUrl : 'goal.timeline.detail.html'
})
export class GoalTimelineDetail{
    constructor(private viewCtrl : ViewController){}

    dismiss(){
        this.viewCtrl.dismiss();
    }
}