import { Component, OnInit } from '@angular/core';
import { Session } from 'protractor';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  login(){
    alert('userlogin');
    localStorage.setItem('username','shilpi');
    this.router.navigateByUrl('dasboard')
  }


}
