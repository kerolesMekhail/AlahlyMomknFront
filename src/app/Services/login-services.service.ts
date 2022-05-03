import { Injectable, Inject ,EventEmitter,Output} from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';
import { HttpResponse, HttpHeaders } from '@angular/common/http';

const baseURL = 'https://localhost:7242/api/User/';


@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor(private router: Router, private http:HttpClient) { }

  Login(data:any){
    return this.http.post<any>(baseURL + 'Login' ,data);
  }

  ngOnInit(): void {
    
  }
}

