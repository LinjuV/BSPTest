import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groups = this.fb.group(
    {
      groupName: [''],
      grouptype: [''],
      grpEffDate: ['']
    });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
