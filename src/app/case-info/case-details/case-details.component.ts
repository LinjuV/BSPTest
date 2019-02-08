import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.css']
})
export class CaseDetailsComponent implements OnInit {
  @Input() caseName: string;
  @Input() einNumber: string;
  @Input() caseEffDate: string;
  @Input() caseSttsCd: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
