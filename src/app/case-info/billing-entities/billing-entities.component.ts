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
  @Input('type') type:string;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.caseInfo);
  }


  addBillingEnities(){
    let be = this.caseInfo.controls['billingEntities'] as FormArray;
    be.push(this.createBillingEntities());
  }

  createBillingEntities() : FormGroup{
    return this.fb.group({
      billingEntityEffDate : new FormControl(),
      billingEntityName : new FormControl(),
      billingEntityType : new FormControl(),
      billingEntitySttsCd : new FormControl(),
      billCopiesNbr : new FormControl(),
      billFrequency : new FormControl()
    });
  }

  removeBillingEntity(i){
    let be = this.caseInfo.controls['billingEntities'] as FormArray;
    be.removeAt(i);
  }
}
