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
  constructor(private fb: FormBuilder) { }
  @Input('groups') groups: FormArray;
  @Input('caseInfo') caseInfo: FormGroup;
  
  ngOnInit() {
  console.log(this.groups);
  }

  getCntrcts(form){
    console.log(form);
    return form.controls.cntrcts.controls;
  }

}
