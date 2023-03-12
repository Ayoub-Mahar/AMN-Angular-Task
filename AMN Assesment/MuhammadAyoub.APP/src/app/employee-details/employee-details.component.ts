import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { ToastrService } from 'ngx-toastr';
import {EmployeeFormComponent} from './employee-form/employee-form.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(public empService:EmployeeService, public datepipe:DatePipe, public toast:ToastrService, public router:Router) { }

 @ViewChild(EmployeeFormComponent) emp:EmployeeFormComponent;

  ngOnInit() {
    this.empService.getEmployees().subscribe(data=>{
      this.empService.listEmployee=data;
    });
  }

  populateEmployee(selecetedEmployee:Employee)
  {
    let dof=this.datepipe.transform(selecetedEmployee.dob,'yyyy-MM-dd');
    selecetedEmployee.dob=dof;
    this.empService.employeeData=selecetedEmployee;
  }
  clearData(){
    this.empService.employeeData = new Employee();
  }

  delete(id:number)
  {
    if(confirm('Are you really want to delete this record?'))
    {
      this.empService.deleteEmployee(id).subscribe(data=> {
        this.empService.getEmployees().subscribe(data=>{
          this.empService.listEmployee=data;
          this.toast.error('Success','Record Deleted');
        });
      },
      err=>{
      });
    }
  }
}
