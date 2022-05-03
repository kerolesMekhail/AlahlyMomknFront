import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { LoginServicesService } from '../Services/login-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username='';
  public password='';
  constructor(private login: LoginServicesService ,private router:Router) { }

  Login(): any {
    if( this.username != ''&& this.password != ''){
      let body={
        "UserName":this.username,
        "Password":this.password
      }
    
      this.login.Login(body).subscribe((data) => {
        if (data) {
                 localStorage.setItem("Token", data.Token);
                 this.router.navigate(['/step']
                 );
        }
      }
    );
      
     }  
    
      }

  ngOnInit(): void {
  
  }

  
}
