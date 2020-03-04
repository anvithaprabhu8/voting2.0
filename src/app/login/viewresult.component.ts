import { Component, OnInit } from '@angular/core';
import { CandidateRepository } from '../model/candidate.repository';

@Component({
  selector: 'app-viewresult',
  templateUrl: './viewresult.component.html',
  styleUrls: ['./viewresult.component.scss']
})
export class ViewresultComponent implements OnInit {

  constructor(private repo:CandidateRepository) { }

  ngOnInit() {
  }
  get areas():[]{
    return this.repo.getAllAreas();
  }

}
