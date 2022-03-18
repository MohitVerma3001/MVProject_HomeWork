import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.scss']
})
export class ClassStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mypro : boolean = true;
  mystyle1 : string = "15px"
  isActive : boolean = false

  mltclasses = {
    class1: true,
    class2: false,
    class3: true
  }

  mltstyle = {
    'background': 'red',
    'border': '10px solid green'
  }
}
