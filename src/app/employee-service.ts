import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { 
  }

  addEmployees(employee: any){
    return this.http.post("http://localhost:8080/web/create", employee);
  }
  getAllEmployee() {
    return this.http.get("http://localhost:8080/web/get");
  }
}
