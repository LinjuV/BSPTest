import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-brokers',
  templateUrl: './brokers.component.html',
  styleUrls: ['./brokers.component.css']
})
export class BrokersComponent implements OnInit {

  count:number[]=[1,2,3];
  @Input('brokers') brokers:FormArray;
  @Input('caseInfo') caseInfo:FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
