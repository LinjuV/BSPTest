import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input('contact') contact:FormGroup;
  @Input('caseInfo') caseInfo: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
