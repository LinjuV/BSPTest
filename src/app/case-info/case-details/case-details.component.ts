import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.css']
})
export class CaseDetailsComponent implements OnInit {
  @Input('caseInfo') caseInfo: FormGroup;
  isViewMode: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.isViewMode = JSON.parse(sessionStorage.getItem('isViewMode'));
  }

}
