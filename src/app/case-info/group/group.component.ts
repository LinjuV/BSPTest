import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

   count: number[] = [1, 2, 3];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
