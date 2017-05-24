import {Injectable} from '@angular/core';
import {Country} from '../models/country';



@Injectable()
export class CountryService{

    countries : Country[];

    constructor(){
        this.countries = [
            {id : 1,name : 'India'},
            {id : 2,name : 'Australia'},
            {id : 3,name : 'England'},
        ];
    }
    getCountries() : Country[]{
        return this.countries;
    }
}