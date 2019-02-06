import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { CaseInfo } from '../models/case-info';
import { fbind } from '../../../node_modules/@types/q';
import { createComponentFactory } from '../../../node_modules/@angular/core/src/view';
import { group } from '../../../node_modules/@angular/animations';
import {FormBuilder,FormControl,FormGroup,FormArray} from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-case-info',
  templateUrl: './case-info.component.html',
  styleUrls: ['./case-info.component.css']
})
export class CaseInfoComponent implements OnInit {

  caseInfo : FormGroup;
  caseInfoObject : CaseInfo;
  constructor(private fb: FormBuilder) { }

  staticData : string = "{\"caseInfo\": {\"caseName\": \"Event Driven POC Case\",\"einNumber\": \"1234567890\",\"caseEffDate\": \"CA\",\"caseSttsCd\": \"CA\",\"address\": {\"addressLine1\": \"WoodLand Hills\",\"addressLine2\": \"OAK Street\",\"addressLine3\": \"CA\",\"city\": \"LA\",\"county\": \"County\",\"stateCd\": \"State\",\"zipCode\": \"10000\"},\"contact\": {\"emailId\": \"email@address.com\", \"faxNumber\": \"1231231212\", \"telephoneNumber\": \"123123123\" }, \"groups\": [{ \"groupName\": \"Group1\", \"groupType\": \"Active\", \"grpEffDate\": \"01/01/2019\", \"groupSize\": { \"medicalSize\": \"2\", \"dentalSize\": \"2\", \"visionSize\": \"3\", \"totalEmployees\": \"7\" }, \"cntrcts\": [{ \"cntrctCd\": \"CNTR1\", \"cntctEffDate\": \"01/01/2019\", \"cvrgType\": \"P\", \"cntrctName\": \"P\", \"cntrctDesc\": \"P\" }, { \"cntrctCd\": \"CNTR1\", \"cntctEffDate\": \"01/01/2019\", \"cvrgType\": \"P\", \"cntrctName\": \"P\", \"cntrctDesc\": \"P\"} ] }, { \"groupName\": \"Group1\", \"groupType\": \"Active\", \"grpEffDate\": \"01/01/2019\", \"groupSize\": { \"medicalSize\": \"2\", \"dentalSize\": \"2\", \"visionSize\": \"3\", \"totalEmployees\": \"7\" }, \"cntrcts\": [{ \"cntrctCd\": \"CNTR1\", \"cntrctSttsCd\": \"MED\", \"cvrgType\": \"P\", \"cntrctName\": \"P\", \"cntrctDesc\": \"P\" }, { \"cntrctCd\": \"CNTR1\", \"cntrctSttsCd\": \"MED\", \"cvrgType\": \"P\", \"cntrctName\": \"P\", \"cntrctDesc\": \"P\" } ] } ], \"billingEntities\": [{ \"billingEntityEffDate\": \"01/01/2019\", \"billingEntityName\": \"BEName\", \"billingEntityType\": \"H\", \"billingEntitySttsCd\": \"A\", \"billCopiesNbr\": \"30\", \"billFrequency\": \"1\" }, { \"billingEntityEffDate\": \"01/01/2019\",\"billingEntityName\": \"BEName\",\"billingEntityType\": \"H\", \"billingEntitySttsCd\": \"A\", \"billCopiesNbr\": \"30\", \"billFrequency\": \"1\" } ], \"brokers\": [{ \"agentTin\": \"11111111\", \"parentTin\": \"22222222\", \"brkrTypeCd\": \"A\", \"percentage\": \"50\", \"cvrgTypeCd\": \"MED\" }, { \"agentTin\": \"11111111\", \"parentTin\": \"22222222\", \"brkrTypeCd\": \"A\", \"percentage\": \"50\", \"cvrgTypeCd\": \"MED\" } ] } }";

  ngOnInit() {
    console.log(this.testmockData());
    this.createViewForm();
  }

  testmockData() {
   let observable =  Observable.of(new CaseInfo).map(staticData1 => JSON.parse(this.staticData));
    observable.subscribe((data)=>{
      console.log(data); 
      this.caseInfoObject = data.caseInfo;
      console.log(this.caseInfoObject);
    });
    return observable;
  }

  createViewForm() {
    this.caseInfo = this.fb.group({
      caseName : new FormControl(this.caseInfoObject.caseName),
      einNumber : new FormControl(),
      caseEffDate : new FormControl(),
      caseSttsCd : new FormControl(),
      address : this.createAddress(),
      contact : this.createContact(),
      groups : this.fb.array([this.createGroup()]),
      billingEntities : this.fb.array([this.createBillingEntities()]),
      brokers : this.fb.array([this.createBrokers()])
    });
  }

  createAddress() : FormGroup {
    return this.fb.group({
      addressLine1 : new FormControl(this.caseInfoObject.address.addressLine1),
      addressLine2 : new FormControl(),
      addressLine3 : new FormControl(),
      city : new FormControl(),
      county : new FormControl(),
      stateCd : new FormControl(),
      zipCode : new FormControl()
    });
  }

  createContact () : FormGroup{
    return this.fb.group({
      emailId : new FormControl(),
      faxNumber : new FormControl(),
      telephoneNumber : new FormControl()
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
