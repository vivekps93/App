import {Week} from './week';
import {WeekService} from '../services/week.service';


export class NewTaskModel{
    Title : string;
    Description : string;
    AttachedSchedule : number;
    StartDate : Date;
    StartTime : Date;
    Location : string;
    Duration : number;
    OccurrenceWeekDays : Array<number>;
    OccurrenceDays : number;
    constructor(){
        this.Title = null;
        this.Description = null;
        this.AttachedSchedule = null;
        this.StartDate = null;
        this.StartTime = null;
        this.Location = null;
        this.Duration = null;
        this.OccurrenceWeekDays = null;
        this.OccurrenceDays = null;
    }
}