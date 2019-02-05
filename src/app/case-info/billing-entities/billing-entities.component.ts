import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-billing-entities',
  templateUrl: './billing-entities.component.html',
  styleUrls: ['./billing-entities.component.css']
})
export class BillingEntitiesComponent implements OnInit {

  count: number[] = [1, 2, 3];
  @Input('billingEntities') billingEntities:FormArray;
  @Input('caseInfo') caseInfo:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
