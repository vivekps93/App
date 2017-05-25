export class NewUser{
    FirstName : string;
    LastName : string;
    Email : string;
    Gender : string;
    Password : string;
    ConfirmPassword : string;
    ContactNo : string;
    DateOfbirth : Date;
    Country : number;

    constructor(){
        this.FirstName = null;
        this.LastName= null;
        this.Email = null;
        this.Gender = null;
        this.Password = null;
        this.ConfirmPassword = null;
        this.ContactNo = null;
        this.DateOfbirth = null;
        this.Country = null;
    }
}