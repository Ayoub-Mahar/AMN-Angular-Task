import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private myhttp:HttpClient) { }
  employeeBaseURL:string = 'https://localhost:7137/api/Employee';
  listEmployee:Employee[] = [];

  employeeData:Employee = new Employee(); // for post data / insert data

  saveEmployee()
  {
    return this.myhttp.post(this.employeeBaseURL,this.employeeData);
  }
  updateEmployee(id:number,data:Employee)
  {
    this.employeeData = data;
    this.employeeData.id = id;
    return this.myhttp.put(`${this.employeeBaseURL}/${this.employeeData.id}` ,this.employeeData);
  }

  find(id:number): Observable<any> {
    return this.myhttp.get(this.employeeBaseURL+ '/GetEmployee?id=' + id)
  }
  getEmployees():Observable<Employee[]>
  {
    this.deleteEmployee
    return this.myhttp.get<Employee[]>(this.employeeBaseURL+'/GetAllEmployees');
  }
  deleteEmployee(id:number)
  {
    return this.myhttp.delete(`${this.employeeBaseURL}/${id}`);
  }
}
