import { DatePipe } from '@angular/common';
import { Component,ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-emp',
  templateUrl: './register-emp.component.html',
  styleUrls: ['./register-emp.component.css']
})
export class RegisterEmpComponent {

  constructor(public empService: EmployeeService, public toast:ToastrService, public router:Router) { }

  @ViewChild('checkbox1') checkBox:ElementRef;
 isSlide:string = 'off';
  ngOnInit() {
  }

  submit(form: NgForm) {
    if (this.empService.employeeData.id == 0) {
      this.insertEmployee(form);
    }
  }

  insertEmployee(myform: NgForm) {
    this.empService.saveEmployee().subscribe(d => {
      this.refereshData();
     this.resetForm(myform);
     this.toast.success('Successs','Record Saved');
     this.router.navigateByUrl('/employee-details');
     
    });
  }

  resetForm(myform:NgForm)
  {
    myform.form.reset();
    this.empService.employeeData=new Employee();
  }

  refereshData()
  {
    this.empService.getEmployees().subscribe(res =>{
      this.empService.listEmployee = res;
    });
  }
   hideShowSlide()
  {
    if(this.checkBox.nativeElement.checked)
    {
      this.checkBox.nativeElement.checked=false;
      this.isSlide='off';
    }
    else
    {
      this.checkBox.nativeElement.checked=true;
      this.isSlide='on';
    }
  }
}
