import {Component} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {ViewController} from 'ionic-angular';
import {NewTaskModel} from '../../../models/newTask';
import {WeekService} from '../../../services/week.service';
import {Week} from '../../../models/week';

@Component({
    templateUrl : 'task.new.html'
})
export class NewTask{
    newTask : NewTaskModel;
    newTaskForm : FormGroup;
    weeks : Array<Week>;
    constructor(private viewCtrl : ViewController,
                private fb : FormBuilder,
                private weekService : WeekService){
                    this.initilalizeForm();
    }

    initilalizeForm(){
        this.newTask = new NewTaskModel();
        this.newTaskForm = this.fb.group({
            'title' : [this.newTask.Title,[Validators.compose([Validators.required])]],
            'description' : [this.newTask.Description,[Validators.compose([Validators.required])]],
            'attachedSchedule' : [this.newTask.AttachedSchedule],
            'startDate' : [this.newTask.StartDate,[Validators.compose([Validators.required])]],
            'startTime' : [this.newTask.StartTime,[Validators.compose([Validators.required])]],
            'duration' : [this.newTask.Duration,[Validators.compose([Validators.required])]],
            'occurenceWeekDays' : [this.newTask.OccurrenceWeekDays,[Validators.compose([Validators.required])]],
            'occurenceDays' : [this.newTask.OccurrenceDays,[Validators.compose([Validators.required])]],
        })
        this.weeks = this.weekService.getWeek()
    }
    dismiss(){
        this.viewCtrl.dismiss();
    }
}