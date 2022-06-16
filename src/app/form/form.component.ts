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

   // Make parameterized constructor of employee which is our model
  employee: EmployeeModel = new EmployeeModel("","",new Date,"",0,"","")

   //Getting id from routes snapshot using paramMap for doing update operation
  id: any = this.route.snapshot.paramMap.get("id");

  /**
   *Injected router to navigate from one component to another component
   *Injected ActivatedRoute to get access to information about route.here it take id as path variable
   *component loaded
   */
  constructor(private router:Router, private service:EmployeeService, private route:ActivatedRoute) { }

  //whenever the component is initialized ngOnInit method is invoked first
  ngOnInit(): void {
  }

  /**
   * using router navigate user to DashboardComponent
   */
  onCancle(){
    this.router.navigate(["dashboard"]);
  }

 /**
  *Calls addEmployeeData method in service which uses http post method to save employee data to the database
  *and also navigate the user from form view to dashboard view
  */
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
  
  /**
   *Calls updateEmployeeData method in service which uses http updateEmployeeById method
   * to update employee data in database using Id, id required from routing the  path for that 
   * we used activated route which take id as a path variable
   */
  updateEmployeeData() {
    this.service.updateEmployeeById(this.employee, this.id).subscribe ((data:any) => {
      this.router.navigate(["dashboard"])
    });
    
  }
}
