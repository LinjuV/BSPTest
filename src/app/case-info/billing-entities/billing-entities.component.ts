import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { CaseInfo } from '../../models/case-info';

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
  products:string[] = [];
  disableProducts:string[]=[];
  enabledIndex:number;
  productMap = new Map();
  caseInfoRequest : CaseInfo = new CaseInfo();
  isViewMode: boolean;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.isViewMode = JSON.parse(sessionStorage.getItem('isViewMode'));
    let groups = this.caseInfo.controls['groups'].value;
    let s:string ;
    groups[0].cntrcts[0].cntrctCd;
    groups.forEach(el => {
      el.cntrcts.forEach(e => {
        if(e.cntrctCd!=null && e.cntrctName!=null){
         s = e.cntrctCd+"_"+e.cntrctName;        
        this.products.push(s);
        }
      });
    });
    console.log(this.products);
  }

  ngDoCheck(){
    this.products = this.products.filter(f => {f != "null_null"});
    if(this.products.length==0){
    let groups = this.caseInfo.controls['groups'].value;
    groups[0].cntrcts[0].cntrctCd;
    groups.forEach(el => {
      el.cntrcts.forEach(e => {
        let s = e.cntrctCd+"_"+e.cntrctName;
        this.products.push(s);
      });
    });
    console.log(this.products);
  }
}
  onSubmit(){
    console.log(this.caseInfo);
    this.caseInfoRequest = this.caseInfo.value;
    console.log(this.caseInfoRequest);
    this.caseInfoRequest.billingEntities.forEach(ele => {
      ele.products=[];      
      
    });
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

  changeProduct(e,index){
    let prod = e.source._elementRef.nativeElement.textContent.trim();
    this.enabledIndex = index;
    if(e.checked == true){
      this.productMap.set(prod,index);
    }
    else if(e.checked == false){
      // this.disableProducts = this.disableProducts.filter( item => item !== prod);
      this.productMap.delete(prod);

    }
    console.log(this.productMap);
  }

}
