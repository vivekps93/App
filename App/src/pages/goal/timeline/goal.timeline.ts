import {Component} from '@angular/core';
import {ViewController,ModalController} from 'ionic-angular';
import {GoalTimelineDetail} from './goal.timeline.detail';

@Component({
    templateUrl : 'goal.timeline.html'
})
export class GoalTimeline{

    constructor(private viewCtrl : ViewController,
                private modalCtrl : ModalController){}

    dismiss(){
        this.viewCtrl.dismiss();
    }

    openDetail(){
        console.log("goal timeline detail clicked");
        let timelineDetailModal = this.modalCtrl.create(GoalTimelineDetail);
        timelineDetailModal.present();
    }
}