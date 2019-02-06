import { element } from 'protractor';
import { GroupSize } from './../models/group-size';
import { Groups } from './../models/groups';
import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { CaseInfo } from '../models/case-info';
import {FormBuilder,FormControl,FormGroup,FormArray} from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Cntrcts } from '../models/cntrcts';

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
    let arr:FormGroup[] = [];
    this.caseInfoObject.billingEntities.forEach(element => {
      arr.push(this.fb.group(element))
    });
    if(arr.length!=0) {
      this.caseInfo.setControl('billingEntities',this.fb.array(arr||[]));
    }
    let arr2:FormGroup[] = [];
    this.caseInfoObject.brokers.forEach(element => {
      arr2.push(this.fb.group(element))
    });
    if(arr2.length!=0) {
      this.caseInfo.setControl('brokers',this.fb.array(arr2||[]));
    }
    let arr3:FormGroup[] = [];
    this.caseInfoObject.groups.forEach(element => {
      arr3.push(this.createGroupForView(element)); 
    });
    console.log("arr3"+arr3);
    if(arr3.length!=0) {
      this.caseInfo.setControl('groups',this.fb.array(arr3||[]));
    }
    
  
    

  }

  createAddress() : FormGroup {
    return this.fb.group({
      addressLine1 : new FormControl(this.caseInfoObject.address.addressLine1),
      addressLine2 : new FormControl(this.caseInfoObject.address.addressLine2),
      addressLine3 : new FormControl(this.caseInfoObject.address.addressLine3),
      city : new FormControl(this.caseInfoObject.address.city),
      county : new FormControl(this.caseInfoObject.address.county),
      stateCd : new FormControl(this.caseInfoObject.address.stateCd),
      zipCode : new FormControl(this.caseInfoObject.address.zipCode)
    });
  }

  createContact () : FormGroup{
    return this.fb.group({
      emailId : new FormControl(this.caseInfoObject.contact.emailId),
      faxNumber : new FormControl(this.caseInfoObject.contact.faxNumber),
      telephoneNumber : new FormControl(this.caseInfoObject.contact.telephoneNumber)
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
  createGroupForView(elem:Groups) : FormGroup{
    return this.fb.group({
      groupName : new FormControl(elem.groupName),
      groupType : new FormControl(elem.groupType),
      grpEffDate : new FormControl(elem.grpEffDate),
      groupSize : this.createGroupSizeForView(elem.groupSize),
      cntrcts : this.createContractArray(elem.cntrcts)
    });
  }
  createContractArray(elem:Cntrcts[]){
    let arr:FormGroup[] = [];
  elem.forEach(element => {
    arr.push(this.createContractForView(element))
  });
  console.log('cntrcts:'+arr);
  return this.fb.array(arr);
  }

  createGroupSize(): FormGroup{
    return this.fb.group({
      medicalSize : new FormControl(),
      dentalSize : new FormControl(),
      visionSize : new FormControl(),
      totalEmployees : new FormControl()
  });
}

createGroupSizeForView(elem:GroupSize): FormGroup{
  return this.fb.group({
    medicalSize : new FormControl(elem.medicalSize),
    dentalSize : new FormControl(elem.dentalSize),
    visionSize : new FormControl(elem.visionSize),
    totalEmployees : new FormControl(elem.totalEmployees)
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

  createContractForView(elem:Cntrcts): FormGroup{
    return this.fb.group({
      cntrctCd : new FormControl(elem.cntrctCd),
      cntctEffDate : new FormControl(elem.cntctEffDate),
      cvrgType : new FormControl(elem.cvrgType),
      cntrctName : new FormControl(elem.cntrctName),
      cntrctDesc : new FormControl(elem.cntrctDesc)
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
