import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { ModalController} from 'ionic-angular';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {UserLogin} from '../../models/userLogin';
import {Register} from '../register/register';

@Component({
    templateUrl:'login.html',
    styleUrls : ['/login.css']
})
export class Login{

    loginForm : FormGroup;
    userlogin : any;

    constructor(private router : Router,
                public formBuilder : FormBuilder,
                public modalController : ModalController ){
        console.log("inside login component");
        this.userlogin = new UserLogin();
        this.initializeForm();
    }

    initializeForm()
    {
        this.userlogin.email = null;
        this.userlogin.password = null;
        this.loginForm = this.formBuilder.group({
            'email' : [this.userlogin.email,Validators.compose([Validators.required,Validators.email])],
            'password' : [this.userlogin.password,Validators.compose([Validators.required])]
        });
    }

    login(){
        console.log("button clicked");
        var user = {
            "email" : this.userlogin.email,
            "password" : this.userlogin.password
        };
        localStorage.setItem('user',JSON.stringify(user));
        var addedCookie = JSON.parse(localStorage.getItem('user'));
        console.log(addedCookie);
        if(addedCookie != undefined)
        {
            if(addedCookie.email != "" && addedCookie.password !="")
            {
                //console.log(addedCookie.email + " : " + addedCookie.password);
                this.router.navigate(['home']);
            }
        }
    }

    openRegister(){
        console.log("inside open register click");
        let registerModal = this.modalController.create(Register);
        registerModal.present();
    }
}