import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }


  // addtoCart(product : any){
  //   this.cartItemList.push(product);
  //   this.productList.next(this.cartItemList);
  //   this.getTotalPrice();
  //   console.log(this.cartItemList);
  // }

  addtoCart(product : any){

  // let  existingObj:any;

    const isFound=this.cartItemList.findIndex((a:any)=>{
           
      // if(a.id === product.id){
      //   existingObj=a;
      //   console.log(existingObj);
      // }
      return a.id === product.id;
    })
    //  console.log(isFound)

    if(isFound === -1){
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      // this.getTotalPrice();
      console.log(this.cartItemList);
    }else{
      // this.cartItemList.splice(isFound,1)
    product.quantity=product.quantity+1;
    product.total=product.total+product.price

    // need to push only if we are slicing
    // this.cartItemList.push(product);

      this.productList.next(this.cartItemList);
      console.log(this.cartItemList)
    }

    this.getTotalPrice();

   
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      //ensure the name of varibles are correct
      grandTotal += a.total;
      // console.log(grandTotal);
    })
    return grandTotal;
  }

  getItemCount():any{
 
    let totalCartCount=0;
    this.cartItemList.map((item:any)=>{
       totalCartCount=totalCartCount+item.quantity;
    })
    return totalCartCount;

  }

  // removeCartItem(product:any){
  //   this.cartItemList.map((a:any,index:any)=>{
  //     if(product.id===a.id){
  //       this.cartItemList.splice(index,1)
  //     }
  //   })
  //   this.productList.next(this.cartItemList);
  // }

  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){

        if(product.quantity > 1){
   // this.cartItemList.splice(index,1)
   product.quantity=product.quantity - 1;
   product.total=product.total - product.price;
        }else{
           this.cartItemList.splice(index,1)
        }
     
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }



}
