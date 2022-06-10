import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeModel } from '../EmployeeModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  employee: EmployeeModel = new EmployeeModel("","","","",0,"","")

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onCancle(){
    this.router.navigate(["dashboard"]);
  }
 
  onSubmit() {
    console.log(this.employee);
  }
  getVal(value: String) {
    console.log(value);
    this.employee.department = value.toString();
  }
}
