import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setViewMode(event) {
    // const caseInfo = JSON.parse(sessionStorage.getItem('caseInfo'));
    const isViewMode = event;
    sessionStorage.setItem('isViewMode', JSON.stringify(isViewMode));
  }

}
