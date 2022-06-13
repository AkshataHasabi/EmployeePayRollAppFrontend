export class EmployeeModel {

    fName: String;
    gender: String;
    department: String;
    salary: number;
    startDate: Date;
    note: String
    profilePic: String;
constructor(fName: String, gender: String, startDate: Date,department: String,salary: number, note: String,profilePic: String){
    this.fName=fName;
    this.gender=gender;
    this.startDate=startDate;
    this.department=department;
    this.salary=salary;
    this.note=note;
    this.profilePic=profilePic;
}
}