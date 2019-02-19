import { Component, OnInit } from '@angular/core';
import { CaseInfo } from '../../models/case-info';
import { FormControl } from '@angular/forms';


const ELEMENT_DATA: CaseInfo[] = [
  {caseName: 'Event Driven POC Case', einNumber: '1234567890', caseEffDate: '01/01/2019',
  caseSttsCd: 'CA', address: null, contact: null, groups: null, billingEntities: null, brokers: null}

];

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})

export class CaseComponent implements OnInit {

  displayedColumns: string[] = ['caseName', 'einNumber', 'caseEffDate', 'caseSttsCd'];
  dataSource = ELEMENT_DATA;
  searchCase: FormControl;

  searchFlag = false;
  constructor() { }

  ngOnInit() {
    this.searchCase = new FormControl('');
  }

  onSearch() {
   this.searchFlag = true;
   console.log(this.searchCase.value) ;
  }

  setViewMode(event) {
    let isViewMode = JSON.parse(sessionStorage.getItem('caseInfo'));
     isViewMode = event;
    sessionStorage.setItem('isViewMode', JSON.stringify(isViewMode));
  }

  // OnSearchKeyEntered(event) {
  //   if ( event.target.value == '') {
  //     this.searchFlag = false;
  //   }
  // }

}
