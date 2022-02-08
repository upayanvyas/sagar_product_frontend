import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-transactions',
  templateUrl: './partner-transactions.component.html',
  styleUrls: ['./partner-transactions.component.scss']
})
export class PartnerTransactionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  makeACopy(){
    // alert(`Making a copy as ${copyAs}`)
    console.log(`Making a copy as`)
  }
}
