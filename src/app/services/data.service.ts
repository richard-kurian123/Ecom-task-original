import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:any='https://dummyjson.com/products';
  constructor(private http:HttpClient) { }

 


  getProducts():Observable<any>{
    return this.http.get(this.url);
   // return this.http.get(this.url).pipe(map(res=>{
   //   return res.json();
   // })  )
   }

   getOne(id:any):Observable<any>{
    return this.http.get('https://dummyjson.com/products/'+id);

    // return this.http.get('https://dummyjson.com/products/'+id).map(res=>{

    // return res.json();
    // })
  }

  getUsers():Observable<any>{
    return this.http.get('/assets/users.json');
  }

}
