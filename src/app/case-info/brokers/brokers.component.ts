import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brokers',
  templateUrl: './brokers.component.html',
  styleUrls: ['./brokers.component.css']
})
export class BrokersComponent implements OnInit {

  count:number[]=[1,2,3];
  
  constructor() { }

  ngOnInit() {
  }

}
