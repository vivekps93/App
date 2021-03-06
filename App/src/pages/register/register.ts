import {Component} from '@angular/core';
import {CountryService} from '../../services/country.service';
import {FormBuilder,FormGroup,Validators,Validator} from '@angular/forms';
import { ViewController} from 'ionic-angular';
import {NewUser} from '../../models/newUser';
import {Country} from '../../models/country';
import {CustomValidators} from '../../services/customValidators';

@Component({
    templateUrl:'register.html'
})
export class Register
{
    registerForm : FormGroup;
    newUser : NewUser;
    countries : Country[];
    constructor(private countryService : CountryService,
                private formBuilder:FormBuilder,
                private viewCotroller : ViewController){
                    this.initializeForm();
                }

    initializeForm(){
        this.newUser = new NewUser();
        this.registerForm = this.formBuilder.group({
            'firstName' : [this.newUser.FirstName,[Validators.compose([Validators.required])]],
            'lastName' : [this.newUser.LastName,[Validators.compose([Validators.required])]],
            'email' : [this.newUser.Email,[Validators.compose([Validators.required,Validators.email])]],
            'password' : [this.newUser.Password,[Validators.compose([Validators.required])]],
            'confirmPassword' : [this.newUser.ConfirmPassword,[Validators.compose([Validators.required])]],
            'gender' : [this.newUser.Gender,[Validators.compose([Validators.required])]],
            'contactNumber' : [this.newUser.ContactNo,[Validators.compose([Validators.required,Validators.maxLength(10)])]],
            'dateOfBirth' : [this.newUser.DateOfbirth,[Validators.compose([Validators.required])]],
            'country' : [this.newUser.Country,[Validators.compose([Validators.required])]]
        },{validator : CustomValidators.matchPassword});
        this.countries = this.countryService.getCountries();
    }
    dismiss(){
        this.viewCotroller.dismiss();
    }
}