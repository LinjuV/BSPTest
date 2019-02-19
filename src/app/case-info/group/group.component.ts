import { Groups } from './../../models/groups';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  count = [1,2];
  isViewMode: boolean;
  constructor(private fb: FormBuilder) { }
  @Input('groups') groups: FormArray;
  @Input('caseInfo') caseInfo: FormGroup;
  @Input('type') type:string;
  
  ngOnInit() {
  console.log(this.groups);
  console.log(this.type);
  this.isViewMode = JSON.parse(sessionStorage.getItem('isViewMode'));
  }

  getCntrcts(form){
    console.log(form);
    return form.controls.cntrcts.controls;
  }

  addContracts(i){
    let contracts = this.caseInfo.get('groups').controls[i].get('cntrcts') as FormArray;
    contracts.push(this.createContract());
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

  removeContract(cntrctIndex,grpindex){
    let contracts = this.caseInfo.get('groups').controls[grpindex].get('cntrcts') as FormArray;
    contracts.removeAt(cntrctIndex);
  }

  addGroups(){
    let groups = this.caseInfo.get('groups') as FormArray;
    groups.push(this.createGroup());
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

removeGroups(i){
  let groups = this.caseInfo.get('groups') as FormArray;
  groups.removeAt(i);
}

}
