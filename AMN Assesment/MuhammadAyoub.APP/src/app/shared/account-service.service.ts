import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './Account';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private myhttp:HttpClient) { }
  accountBaseURL:string = 'https://localhost:7137/api/Account';
  listAccount:Account[] = [];
  accountData:Account = new Account(); // for post data / insert data
  
  saveAccount(data:Account)
  {
    return this.myhttp.post(this.accountBaseURL,this.accountData);
  }
  login(data:Account)
  {
    debugger
    return this.myhttp.post(this.accountBaseURL+'/Login',data);
  }
}
