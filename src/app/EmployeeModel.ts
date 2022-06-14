export class EmployeeModel {
    id:number;
    name: String;
    gender: String;
    department: String;
    salary: number;
    startdate: Date;
    note: String
    profilePic: String;
constructor(id:number, name: String, gender: String, startdate: Date,department: String,salary: number, note: String,profilePic: String){
    this.id=id;
    this.name=name;
    this.gender=gender;
    this.startdate=startdate;
    this.department=department;
    this.salary=salary;
    this.note=note;
    this.profilePic=profilePic;
}
}