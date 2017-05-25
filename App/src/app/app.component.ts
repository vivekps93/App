import { Component,ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { Platform,Nav} from 'ionic-angular';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  constructor(
    public platform: Platform,
    public router : Router
  ) {
    this.intializeApp();
  }

  intializeApp()
  {
    console.log("inside app component");
    var userCookie =  JSON.parse(localStorage.getItem('userCookie'));
    console.log(userCookie);
    if(userCookie != undefined)
    {
      console.log("user cookie is defined");
      if(userCookie.userLogin.email != "" && userCookie.userLogin.password != "")
      {
        console.log("user cookie is defined");
        this.router.navigate(['home']);
        
      }
    }
    this.router.navigate(['login']);
  }
}
