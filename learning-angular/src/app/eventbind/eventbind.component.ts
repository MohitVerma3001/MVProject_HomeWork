import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.scss']
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  msg: string = "";
  onAddCart(){
    this.msg="Product Added in Cart";
  }

  onInputClick(event){
    console.log(event);
  }
  
}
