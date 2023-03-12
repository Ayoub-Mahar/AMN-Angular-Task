import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountSignupComponent } from './account-signup/account-signup.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeEditComponent } from './Employee/employee-edit/employee-edit.component';
import { RegisterEmpEditComponent } from './register-emp-edit/register-emp-edit.component';
import { RegisterEmpComponent } from './register-emp/register-emp.component';

const routes: Routes = [
  {path:'',component:AccountLoginComponent},
  {path:'Login',component:AccountLoginComponent},
  {path:'register-emp',component:RegisterEmpComponent},
  {path:'employee-details',component:EmployeeDetailsComponent},
  { path: 'Employee/:postId/EmployeeEdit', component: EmployeeEditComponent } ,
  {path:'SignUp',component:AccountSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
