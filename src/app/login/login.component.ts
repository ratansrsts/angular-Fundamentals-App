import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //property handling
  username = 'sofwebs';
  password = '';
  errMsg = 'Invalid Credentials';
  inavalidLogin = false;

  //dipendency injection
  constructor(private router:Router,
    private hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  //event handling 
  handleLogin() {
    // if (this.username === 'in28minutes' && this.password === 'dummy') {
    if (this.hardcodedAuthenticationService.authenticate(this.username,this.password)) {
      //to route to welcome page
      this.router.navigate(['welcome',this.username]);
      this.inavalidLogin = false
    }
    else {
      this.inavalidLogin = true
    }
    // console.log("Username :"+this.username);
    // console.log("Password :"+this.password);
  }

}
