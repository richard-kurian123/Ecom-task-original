import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

loggedIn:boolean=false;

  // constructor(private router:Router) { }
  constructor() { }
  login(){
    this.loggedIn=true;
    
  }

  logout(){
    this.loggedIn=false;
  }

  isAuthenticated(){
    // return of(this.loggedIn);
    // return (this.loggedIn);
    return this.loggedIn;
  }

  

}
