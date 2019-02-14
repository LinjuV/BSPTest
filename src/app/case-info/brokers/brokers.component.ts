import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup,FormBuilder,FormControl } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-brokers',
  templateUrl: './brokers.component.html',
  styleUrls: ['./brokers.component.css']
})
export class BrokersComponent implements OnInit {

  count:number[]=[1,2,3];
  @Input('brokers') brokers:FormArray;
  @Input('caseInfo') caseInfo:FormGroup;
  @Input('type') type:string;
  
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  addBrokers(){
    let brks = this.caseInfo.controls['brokers'] as FormArray;
    brks.push(this.createBrokers())
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

  removeBroker(i){
    let brks = this.caseInfo.controls['brokers'] as FormArray;
    brks.removeAt(i);
  }

}
