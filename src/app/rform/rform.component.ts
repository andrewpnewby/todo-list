import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {
  groupOfInputs = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
    whatToDo: new FormControl(''),
  });


  constructor() { }

  ngOnInit(): void {
  }

}
