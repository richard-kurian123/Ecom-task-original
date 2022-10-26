import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  // product:any;
  // productId:any;
  // // productsArray1:any=[];

  id:any;
  singleProductData:any=[];

  // use when needed to display images
  imgArray:any=[];
  imgSrc:any=1;



  constructor(
    private productService:DataService,
     private activatedRoute:ActivatedRoute,
     private cartService:CartService
     ) { }

  ngOnInit(): void {

  
//   this.id = this.activatedRoute.snapshot.params['id'];
//   this.productService.getOne(this.id).subscribe(data=>{
//   this.singleProductData.push(data);
//   this.imgArray=data.images;
  
//   this.singleProductData.forEach((a:any)=>{
//  Object.assign(a,{quantity:1, total:a.price})
//  console.log(this.singleProductData);
   
//   })

// })
this.getProducts();

  }


  getProducts(){
 
    this.id = this.activatedRoute.snapshot.params['id'];
    this.productService.getOne(this.id).subscribe(data=>{
    this.singleProductData.push(data);
    this.imgArray=data.images;
    
    this.singleProductData.forEach((a:any)=>{
   Object.assign(a,{quantity:1, total:a.price})
   console.log(this.singleProductData);
     
    })
  
  })
  }

  addtocart(item:any){
    this.cartService.addtoCart(item);
  }


    




  nextImg(){
    if(this.imgSrc === this.imgArray.length - 1){
      this.imgSrc=this.imgArray.length - 1;
   }else{
    this.imgSrc=this.imgSrc + 1;
   }
   console.log(this.imgSrc);
  }


  previousImg(){
    this.imgSrc=this.imgSrc - 1;
    if(this.imgSrc < 0){
       this.imgSrc=0;
    }
    console.log(this.imgSrc);
  }

  

}
