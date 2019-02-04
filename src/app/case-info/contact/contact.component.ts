import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = this.fb.group(
    {
      email: [''],
      faxNumber: [''],
      telephoneNumber: ['']
    });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
