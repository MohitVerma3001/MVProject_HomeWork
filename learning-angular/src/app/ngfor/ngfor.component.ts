import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products=[
    {imgs:'data:image/jpeg;base64,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', name:'Laptop', id:'pro01', price:15000},
    {imgs:'data:image/jpeg;base64,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', name:'Mobile', id:'pro02', price:10000},
    {imgs:'https://www.sony.ca/image/4ea841c42d23e79595504427d55b990e?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sony.ca%2Fen%2Felectronics%2Ftelevisions%2Fx80j-series&psig=AOvVaw1NpIUyGNFgJERkBeLGExuy&ust=1647771578401000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjJy8750fYCFQAAAAAdAAAAABAF', name:'TV', id:'pro03', price:25000},
    {imgs:'http://www.cheatsheet.com/wp-content/uploads/2017/06/Silver-fridge-with-side-by-side-door-system.jpg', name:'Fridge', id:'pro04', price:30000}
  ]
}
