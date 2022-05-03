import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const baseURL = 'https://localhost:7242/api/';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  constructor(private router: Router, private http:HttpClient) { }

getAllSteps(){
    if(localStorage.getItem("Token") !=null && localStorage.getItem("Token") !='' ){
      var headers= new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+localStorage.getItem("Token"),
      });
    }else{
      var headers= new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      });
    }

  return this.http.get<any>(baseURL + 'Step/FindAll' ,{'headers':headers});
  
}

addStep( data:any){
    if(localStorage.getItem("Token") !=null && localStorage.getItem("Token") !='' ){
      var headers= new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+localStorage.getItem("Token"),
      });
    }else{
      var headers= new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      });
    }
     
    return this.http.post<any>(baseURL + 'Step/AddStep',data ,{'headers':headers});
}

deleteStep( Id:any){    
    if(localStorage.getItem("Token") !=null && localStorage.getItem("Token") !='' ){
      var headers= new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+localStorage.getItem("Token"),
      });
    }else{
      var headers= new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      });
    }
     
  console.log(Id);
  return this.http.get<any>(baseURL + 'Step/DeleteStep?Id='+Id,{'headers':headers});
}

addItem( data:any){
    if(localStorage.getItem("Token") !=null && localStorage.getItem("Token") !='' ){
      var headers= new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+localStorage.getItem("Token"),
      });
    }else{
      var headers= new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      });
    }
  return this.http.post<any>(baseURL + 'Item/AddItem',data ,{'headers':headers});
}

addAndEditItem( data:any){
    if(localStorage.getItem("Token") !=null && localStorage.getItem("Token") !='' ){
      var headers= new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+localStorage.getItem("Token"),
      });
    }else{
      var headers= new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      });
    }
     
  return this.http.post<any>(baseURL+ 'Item/UpdateItem',data ,{'headers':headers});
}

deleteItem( Id:any){
    if(localStorage.getItem("Token") !=null && localStorage.getItem("Token") !='' ){
      var headers= new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+localStorage.getItem("Token"),
      });
    }else{
      var headers= new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      });
    }
  return this.http.get<any>(baseURL + 'Item/DeleteItem?Id='+Id,{'headers':headers});
}
}