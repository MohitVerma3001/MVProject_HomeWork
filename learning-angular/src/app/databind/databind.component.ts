import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.scss']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Name: string = "Mohit Verma";

  myMethod(){
    return "My Full name is " + this.Name;
  }

  Status : boolean = false;
}
