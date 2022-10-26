import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsArray:any=[];

  itemCategorty:any='all';

  constructor(private productService:DataService) { }



  ngOnInit(): void {

   this.productService.getProducts().subscribe((data)=>{
    console.log(data);
    this.productsArray=data.products;
    console.log(this.productsArray);
   })

  //  console.log(this.categorty);

  //  this.filterProducts();

  }

  filterProducts(){


    
    console.log(this.itemCategorty);

  }






  // addtocart(item:any){
  //   this.cartService.addtoCart(item);
  // }

}
