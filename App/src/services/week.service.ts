import {Injectable} from '@angular/core';
import {Week} from '../models/week';

const weeks : Week[] = [
            {Name : "Mon",Value : 1},
            {Name : "Tues",Value : 2},
            {Name : "Wed",Value : 3},
            {Name : "Thurs",Value : 4},
            {Name : "Fri",Value : 5},
            {Name : "Sat",Value : 6},
            {Name : "Sun",Value : 7}
        ];

@Injectable()
export class WeekService{

    getWeek() : Week[]{
        return weeks;
    }
}