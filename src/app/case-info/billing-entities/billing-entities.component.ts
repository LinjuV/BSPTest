import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-billing-entities',
  templateUrl: './billing-entities.component.html',
  styleUrls: ['./billing-entities.component.css']
})
export class BillingEntitiesComponent implements OnInit {

  count: number[] = [1, 2, 3];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
