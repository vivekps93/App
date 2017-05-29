import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {FormBuilder,FormGroup,Validators,Validator} from '@angular/forms';
// import {NewGoal} from '../../../models/newGoal';

@Component({
    templateUrl :'goal.new.html'
})
export class NewGoal{

    newGoal : NewGoal;

    constructor(private viewCtrl : ViewController,
                private fb : FormBuilder){
        this                    
    }

    initializeForm(){
        // this.newGoal = new NewGoal();
        // this.newGoal
    }

    dismiss(){
        this.viewCtrl.dismiss();
    }
}