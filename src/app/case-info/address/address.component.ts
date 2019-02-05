import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { Address } from '../../models/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input('address') address:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
