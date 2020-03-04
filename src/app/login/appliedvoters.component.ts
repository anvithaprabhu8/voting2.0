import { Component, OnInit } from '@angular/core';
import { UserRepository } from '../model/user.repository';
import { Account } from '../model/account.model'
import { Users } from '../model/users.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-appliedvoters',
  templateUrl: './appliedvoters.component.html',
  styleUrls: ['./appliedvoters.component.scss']
})
export class AppliedvotersComponent implements OnInit {

  constructor(private repo: UserRepository) { }

  ngOnInit() { }

  get appliedVoters(): [] {
    return this.repo.getUnapprovedUsers();
  }





  
  validateUser(adr: string) { //assuming approval is happenning elsewhere
    //let account: Account;
    //console.log(this.repo.getUsersByAadhar(adr));
    //let user: Users = 
    // /this.repo.getUsersByAadhar(adr, this.callback());
    //account.generateAccount();
    //console.log(user);
    //console.log(account);
  }

}