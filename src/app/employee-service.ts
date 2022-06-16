import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/**
 * @Injectable class decorators to automatically resolve and inject all the parameters of class constructor.
 * The metadata, providedIn: 'root' , means that the EmployeeService is visible throughout the application.
 * 'root' : The application-level injector in most apps
 */
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  /**
   * injected HttpClient to perform Http request  
   */
  constructor(private http:HttpClient) { 
  }
  /**
   * Purpose: this method is used to request the POST http method.
   * it save the employee data in the database.
   * and also we passed the localhost 8080 url as parameter in post method,
   * @param employee here we passing employee object
   * @returns the repsonse message of the POST method
   */
  addEmployees(employee: any){
    return this.http.post("http://localhost:8080/web/create", employee);
  }
  /**
   * Purpose: this methos is used to request the GET http method.
   * it fetch the employee data form the database.
   * @returns the repsonse message of the GET method
   */ 
  getAllEmployee(){
    return this.http.get("http://localhost:8080/web/get");
  }
   /**
   * Purpose : DELETE request method to hit the HTTP server.s
   * @param id employeid for which the delete action needs to be taken.
   * @returns the delete request response.
   */
  deleteEmployeeById(id:number){
    return this.http.delete("http://localhost:8080/web/"+id);
  }
   /**
    * Purpose: this methos is used to request the put http method.
    * Used HttpClient service class  to perform Http request to update data in database on given url
    * @param employee employyee details we are updating,
    * @param id employeeid for which the update action needs to be taken.
    * @returns the updated response
    */
  updateEmployeeById(employee: any,id: number) {
    return this.http.put("http://localhost:8080/web/update/"+id, employee);
  }
}
