import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { Address } from '../../models/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  address = this.fb.group( 
    {
      addressLine1: [''],
      addressLine2: [''],
      addressLine3: [''],
      city: [''],
      county: [''],
      stateCd:[''],
      zipCode:['']
    });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
