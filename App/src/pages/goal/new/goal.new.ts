import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {FormBuilder,FormGroup,Validators,Validator} from '@angular/forms';
import {NewGoal} from '../../../models/newGoal';

@Component({
    templateUrl :'goal.new.html'
})
export class NewGoalComponent{

    newGoal : NewGoal;
    newGoalForm : FormGroup;

    constructor(private viewCtrl : ViewController,
                private fb : FormBuilder){
        this.initializeForm();                   
    }

    initializeForm(){
        this.newGoal = new NewGoal();
        this.newGoalForm = this.fb.group({
            'title' : [this.newGoal.Title,Validators.compose([Validators.required])],
            'description' : [this.newGoal.Description,Validators.compose([Validators.required])],
            'startDate' : [this.newGoal.StartDate,Validators.compose([Validators.required])],
            'endDate' : [this.newGoal.EndDate,Validators.compose([Validators.required])]
        })
    }

    dismiss(){
        this.viewCtrl.dismiss();
    }
}