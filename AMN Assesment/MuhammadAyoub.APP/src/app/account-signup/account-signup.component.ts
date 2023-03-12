import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountServiceService } from '../shared/account-service.service';

@Component({
  selector: 'app-account-signup',
  templateUrl: './account-signup.component.html',
  styleUrls: ['./account-signup.component.css']
})
export class AccountSignupComponent {
  
  constructor(public accountService: AccountServiceService, public toast:ToastrService,public router:Router) { }

  ngOnInit(){
  }

  submit(form: NgForm) {
    debugger
      this.insertEmployee(form);
  }

  insertEmployee(myform: NgForm) {
    debugger
    this.accountService.saveAccount(myform.value).subscribe(d => {
      this.router.navigateByUrl('/Login');
      this.toast.success('Successs','Account Created Successfully');
    });
  }
}
