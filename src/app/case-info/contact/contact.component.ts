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
  isViewMode: boolen;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.isViewMode = JSON.parse(sessionStorage.getItem('isViewMode'));
  }

}
