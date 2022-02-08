import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login-module',
  templateUrl: './login-module.component.html',
  styleUrls: ['./login-module.component.scss']
})
export class LoginModuleComponent implements OnInit {
  usercreds: any = {
    email: 'test@gmail.com',
    password: 'test1234'
  }


  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  login(formData:any): void {
    console.log('login: ', formData)
    this.route.navigate(['/dashboard'])
  }

}
