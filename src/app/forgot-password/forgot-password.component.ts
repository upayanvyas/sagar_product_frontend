import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    console.log('login')
  }
  formSubmit() {
    this.route.navigate(['/reset-password'])
  }

}
