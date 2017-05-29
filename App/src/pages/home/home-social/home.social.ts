import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    templateUrl : 'home.social.html'
})
export class HomeSocial {
  constructor(public navCtrl: NavController) {
    // Id is 1, nav refers to Tab1
    console.log("Inside home social tab");
  }
}