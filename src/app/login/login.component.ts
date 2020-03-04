import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Account } from '../model/account.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  constructor(public account: Account) { }

  ngOnInit() { }
  onLogin(form: NgForm) {   //add import
    this.submitted = true;
  }


}
