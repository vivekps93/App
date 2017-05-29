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

    }

    initilalizeForm(){
        this.newSchedule = new NewScheduleModel();
        this.newScheduleForm = this.fb.group({
            
        })
    }

    dismiss(){
        this.viewCtrl.dismiss();
    }
}