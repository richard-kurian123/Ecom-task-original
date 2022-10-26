import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
// import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }
  // private productService:DataService,
  productsArray:any=[];

  ngOnInit(): void {

  //      this.productService.getProducts().subscribe((data)=>{
  //   console.log(data);
  //  })
  }

  isLoggedOut(){
    this.authService.logout();
    this.router.navigate(['login']);

  }

}


