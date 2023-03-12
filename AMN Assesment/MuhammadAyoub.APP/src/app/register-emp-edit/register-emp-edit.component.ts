import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-register-emp-edit',
  templateUrl: './register-emp-edit.component.html',
  styleUrls: ['./register-emp-edit.component.css']
})
export class RegisterEmpEditComponent {
  sad!:Employee;
  id!: number;
  constructor(public empService:EmployeeService, public datepipe:DatePipe, public toast:ToastrService, public router:Router,public route:ActivatedRoute) { }

  ngOnInit() {
   
  this.id = this.route.snapshot.params['postId'];
    this.empService.find(this.id).subscribe(data=>{
      this.sad=data;
    });
  }
  submit(form: NgForm) {
    this.empService.updateEmployee(this.id,form.value).subscribe(d => {
      this.resetForm(form);
    form.resetForm();

    })
  }
  resetForm(myform:NgForm)
  {
    myform.reset();
    this.sad = new Employee();
  }
}
