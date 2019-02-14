import { CaseInfo } from './../models/case-info';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.css']
})
export class AddsComponent implements OnInit {

  caseInfo: FormGroup;
  caseInfoObject: CaseInfo = new CaseInfo();
  type:string = 'add';
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
    this.createViewForm();
  }

  createViewForm() {
    this.caseInfo = this.fb.group({
      caseName : new FormControl(''),
      einNumber : new FormControl(''),
      caseEffDate : new FormControl(''),
      caseSttsCd : new FormControl(''),
      address : this.createAddress(),
      contact : this.createContact(),
      groups : this.fb.array([this.createGroup()]),
      billingEntities : this.fb.array([this.createBillingEntities()]),
      brokers : this.fb.array([this.createBrokers()])
    });
  }

  createAddress() : FormGroup {
    return this.fb.group({
      addressLine1 : new FormControl(''),
      addressLine2 : new FormControl(''),
      addressLine3 : new FormControl(''),
      city : new FormControl(''),
      county : new FormControl(''),
      stateCd : new FormControl(''),
      zipCode : new FormControl('')
    });
  }


  createContact () : FormGroup{
    return this.fb.group({
      emailId : new FormControl(''),
      faxNumber : new FormControl(''),
      telephoneNumber : new FormControl('')
    });
  }


  createGroup() : FormGroup{
    return this.fb.group({
      groupName : new FormControl(),
      groupType : new FormControl(),
      grpEffDate : new FormControl(),
      groupSize : this.createGroupSize(),
      cntrcts : this.fb.array([this.createContract()])
    });
  }

  createGroupSize(): FormGroup{
    return this.fb.group({
      medicalSize : new FormControl(),
      dentalSize : new FormControl(),
      visionSize : new FormControl(),
      totalEmployees : new FormControl()
  });
}

createContract(): FormGroup{
  return this.fb.group({
    cntrctCd : new FormControl(),
    cntctEffDate : new FormControl(),
    cvrgType : new FormControl(),
    cntrctName : new FormControl(),
    cntrctDesc : new FormControl()
  });
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

createBrokers() : FormGroup{
  return this.fb.group({
    agentTin : new FormControl(),
    parentTin : new FormControl(),
    brkrTypeCd : new FormControl(),
    percentage : new FormControl(),
    cvrgTypeCd : new FormControl()
  });
}

}
