import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountServiceService } from '../shared/account-service.service';
@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css']
})
export class AccountLoginComponent {

  constructor(public accountService: AccountServiceService, public toast:ToastrService,public router:Router) { }

  ngOnInit(){
  }

  submit(form: NgForm) {
    debugger
      this.insertEmployee(form);
  }

  insertEmployee(myform: NgForm) {
    debugger
    this.accountService.login(myform.value).subscribe(d => {
      this.router.navigateByUrl('/employee-details');
      this.toast.success('Successs','Authentication Success');
    });
  }

}
