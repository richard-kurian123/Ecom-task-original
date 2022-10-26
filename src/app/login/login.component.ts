import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!:FormGroup;

  constructor(private authService:AuthService,
    private router:Router,
    private dataService:DataService,
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {

    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(2)]]
    })
   
  }


  isloggedIn(){

    this.dataService.getUsers().subscribe(res=>{
      const user=res.find((a:any)=>{
      
        return a.mail === this.loginForm.value.email && a.psd===this.loginForm.value.password;   
      });
      if(user){
        this.authService.login();
        // alert("login success");
        this.loginForm.reset();
        this.router.navigate(['admin'])
      }else{
        alert("login failed, user not registered");
        this.loginForm.reset();
      }
    })


  }

//   isloggedIn(){



//  this.authService.login();
//  console.log("logged in");
//   this.router.navigate(['admin']);

//   }

}
