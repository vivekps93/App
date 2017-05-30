import {Component} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {ViewController} from 'ionic-angular';
import {NewScheduleModel} from '../../../models/newSchedule';

@Component({
    templateUrl : 'schedule.new.html'
})
export class NewSchedule{

    newSchedule : NewScheduleModel;
    newScheduleForm : FormGroup;
    constructor(private viewCtrl : ViewController,
                private fb : FormBuilder){
                    this.initilalizeForm();
    }

    initilalizeForm(){
        this.newSchedule = new NewScheduleModel();
        this.newScheduleForm = this.fb.group({
            'title' : [this.newSchedule.Title,Validators.compose([Validators.required])],
            'description' : [this.newSchedule.Description,Validators.compose([Validators.required])],
            'attachedGoal' : [this.newSchedule.AttachedGoal,Validators.compose([Validators.required])],
            'startDate' : [this.newSchedule.StartDate,Validators.compose([Validators.required])],
            'occuranceDays' : [this.newSchedule.OcurranceDays,Validators.compose([Validators.required])]
        })
    }

    dismiss(){
        this.viewCtrl.dismiss();
    }
}