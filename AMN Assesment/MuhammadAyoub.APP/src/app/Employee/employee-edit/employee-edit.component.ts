import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
  sad!:Employee;
  id!: number;
  constructor(public empService:EmployeeService, public datepipe:DatePipe, public toast:ToastrService, public router:Router,public route:ActivatedRoute) { }

  ngOnInit() {
this.id = this.route.snapshot.params['postId'];
    this.empService.find(this.id).subscribe(data=>{
      this.sad=data;
      console.log(this.sad);
      let dof=this.datepipe.transform(this.sad.dob,'yyyy-MM-dd');
      this.sad.dob=dof;
    });
  }
  
  submit(form: NgForm) {
    this.empService.updateEmployee(this.id,form.value).subscribe(d => {
      this.router.navigateByUrl('/employee-details');
      this.resetForm(form);
    })
  }
  resetForm(myform:NgForm)
  {
    myform.form.reset();
    this.sad=new Employee();
  }
}
