export class EmployeeModel {

    firstName: String;
    lastName:String;
    gender: String;
    department: String;
    salary: number;
    date: Date;
    notes: String
    profilePic: String;
constructor(firstName: String, lastName:String, gender: String, date: Date,department: String,salary: number, notes: String,profilePic: String){
    this.firstName=firstName;
    this.lastName=lastName;
    this.gender=gender;
    this.date=date;
    this.department=department;
    this.salary=salary;
    this.notes=notes;
    this.profilePic=profilePic;
}
}