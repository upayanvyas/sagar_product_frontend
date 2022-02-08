import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  openPartnerDetail(){
    // console.log('partner details')
    this.route.navigate(['/partner-transaction'])
  }

  openAlert(){
    alert('sdfjlsajf')
  }

}
