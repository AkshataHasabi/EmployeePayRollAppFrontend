import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee-service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employee: Object;
  

  constructor(private router:Router, private service:EmployeeService) { }

  ngOnInit(): void {
    //pass api
    this.service.getAllEmployee().subscribe(data => {
      this.employee = data;
      console.log(this.employee);
    });
  }
  onAddUser(){
    this.router.navigate(["form"]);
  }
}
