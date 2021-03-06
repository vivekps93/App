import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import {NewGoalComponent} from '../../goal/new/goal.new';
import {NewSchedule} from '../../schedule/new/schedule.new';
import {NewTask} from '../../task/new/task.new';
import {GoalTimeline} from '../../goal/timeline/goal.timeline';

@Component({
    templateUrl : 'home.self.html'
})
export class HomeSelf {
  constructor(public navCtrl: NavController,
              public modalCtrl : ModalController
    ) {
    // Id is 1, nav refers to Tab1
    console.log("Inside home self tab");
  }

  createNew(option){
    switch(option){
      case "Goal":
        let newGoalModal = this.modalCtrl.create(NewGoalComponent);
        newGoalModal.present();
        break;
      case "Schedule":
        let newScheduleModal = this.modalCtrl.create(NewSchedule);
        newScheduleModal.present();
        break;
      case "Task":
        let newTaskModal = this.modalCtrl.create(NewTask);
        newTaskModal.present();
        break;    
    }
  }
  openTimeline(option){
    console.log("open goal yimelien" + option);
    switch(option){
      case "Goal" :
        let goalTimelineModal = this.modalCtrl.create(GoalTimeline);
        goalTimelineModal.present();
        break; 
      case "Schedule" :
        break;
      case "Task" : 
        break;
    }
  }

}