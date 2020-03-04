import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Account } from './account.model';
import { RestDataSource } from './rest.datasource';
import { UserRepository } from './user.repository';
import { CandidateRepository } from './candidate.repository';

@NgModule({
  providers: [Account, RestDataSource, UserRepository, CandidateRepository],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ModelModule { }
