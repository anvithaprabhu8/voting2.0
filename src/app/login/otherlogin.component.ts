import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Account } from '../model/account.model';

@Component({
  selector: 'app-otherlogin',
  templateUrl: './otherlogin.component.html',
  styleUrls: ['./otherlogin.component.scss']
})
export class OtherloginComponent implements OnInit {

  submitted: boolean = false;
  constructor(public account: Account) { }

  ngOnInit() {
  }
  onLogin(form: NgForm) {   //add import
    this.submitted = true;

  }

}
