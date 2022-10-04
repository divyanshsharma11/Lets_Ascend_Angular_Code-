import { Component, OnInit } from '@angular/core';
import { Stocks } from '../stock';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocks!: Stocks[];

  constructor() { }

  ngOnInit(): void {
    this.stocks=[
      {
        "name":"MRF",
        "price": 82000
      },
      {
        "name":"Bata",
        "price": 1200
      },
      {
        "name":"Infosys",
        "price": 1800
      }
    ]
  }

}
