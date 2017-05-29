export class NewScheduleModel{
    Title : string;
    Description : string;
    AttachedGoal : string;
    StartDate : Date;
    OcurranceDays : number;

    constructor(){
        this.Title = null;
        this.Description = null;
        this.AttachedGoal = null;
        this.StartDate = null;
        this.OcurranceDays = null;
    }
}