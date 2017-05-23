import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    templateUrl:'login.html'
})
export class Login{
    constructor(private router : Router){
        console.log("inside login component");
    }

    btnClicked(){
        console.log("button clicked");
        var user = {
            "email" : "s@s.com",
            "password" : "12345"
        };
        localStorage.setItem('user',JSON.stringify(user));
        var addedCookie = JSON.parse(localStorage.getItem('user'));
        if(addedCookie != undefined)
        {
            if(addedCookie.email != "" && addedCookie.password !="")
            {
                this.router.navigate(['home']);
            }
        }
    }
}