import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
Property:any ={
  "id":1,
  "Type":"House",
  "Name":"Modern House",
  "Price":15000,
}
  constructor() { }

  ngOnInit(): void {
  }

}
