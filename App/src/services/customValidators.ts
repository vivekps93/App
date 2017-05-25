import {FormControl,FormGroup} from '@angular/forms';

export class CustomValidators{

    static matchPassword(formGroup : FormGroup){
        let valid = false;
        console.log("inside custom validator");
        console.log(formGroup.controls["password"].value);
        console.log(formGroup.controls["confirmPassword"].value);
        if(formGroup.controls["password"].value == formGroup.controls["confirmPassword"].value){
            valid = true
        }
        if(valid)
        {
            return null;
        }
        return{
            matchPassword : true
        }
    }
}