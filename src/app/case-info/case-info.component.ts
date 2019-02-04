import { Component, OnInit, createPlatformFactory } from '@angular/core';

@Component({
  selector: 'app-case-info',
  templateUrl: './case-info.component.html',
  styleUrls: ['./case-info.component.css']
})
export class CaseInfoComponent implements OnInit {

  case: any;
  constructor() { }

  ngOnInit() {
    this.createViewForm();
  }

  createViewForm() {
    this.case = "A";
  }
}
