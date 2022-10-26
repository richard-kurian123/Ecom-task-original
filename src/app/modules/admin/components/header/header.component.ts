import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem:number=0;
   public count:any;

  constructor(
    private cartService:CartService,
    private authService:AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem =res.length;
      this.count=this.cartService.getItemCount();


    })
  }

  isLoggedOut(){
    this.authService.logout();
    this.router.navigate(['login']);

  }

}
