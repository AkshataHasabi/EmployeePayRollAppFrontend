import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from '../EmployeeModel';
import { EmployeeService } from '../employee-service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  employee: EmployeeModel = new EmployeeModel(0,"","",new Date,"",0,"","")

  id: any = this.route.snapshot.paramMap.get("id");

  constructor(private router:Router, private service:EmployeeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onCancle(){
    this.router.navigate(["dashboard"]);
  }
 
  onSubmit() {
    console.log(this.employee);
     this.service.addEmployees(this.employee).subscribe((data:any)=> 
    {
      this.router.navigate(["dashboard"])
    })
  }
  getVal(value: String) {
    console.log(value);
    this.employee.department = value.toString();
  }
  updateEmployeeData() {
    this.service.updateEmployeeById(this.employee, this.id).subscribe ((data:any) => {
      this.router.navigate(["dashboard"])
    });
    
  }
}
