import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
    templateUrl : 'task.new.html'
})
export class NewTask{
    constructor(private viewCtrl : ViewController){

    }
    dismiss(){
        this.viewCtrl.dismiss();
    }
}