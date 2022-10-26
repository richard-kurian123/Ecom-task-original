// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ProductDetailsComponent } from './product-details.component';

// describe('ProductDetailsComponent', () => {
//   let component: ProductDetailsComponent;
//   let fixture: ComponentFixture<ProductDetailsComponent>;


  

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ProductDetailsComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ProductDetailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });



////////PARTIALLY WORKING CODE////////////////////////////////////////////////////////////////////////////////

import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

import { ProductDetailsComponent } from './product-details.component';
import * as Rx from 'rxjs';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;


  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ ProductDetailsComponent ],
      providers:[DataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call ngOnInit', () => {

    let spy_getPostDetails = spyOn(component,"getProducts");
    
    component.ngOnInit();
    expect(component.getProducts).toEqual([{}]);
  })


  it('lets check whether the data is comming or not', fakeAsync(()=>{
    const service = fixture.debugElement.injector.get(DataService);
    let spy_getProducts=spyOn(service,"getProducts").and.callFake(():any=>{
      return Rx.of([{productId:10}])
    })
    component.getProducts();
    expect(component.getProducts).toEqual([{productId:10}]);
  }));


  

  // it('single products data should match the data passed', () => {
  //   let service = fixture.debugElement.injector.get(DataService);
  //   spyOn(service,"getOne").and.callFake(():any => {
  //   return of({
  //     'dummydata':239
  //   })
  //   })
  

  //   expect(component.singleProductData).toEqual({
  //     'dummydata':239
  //   })

  // });



});





////////////////////PARTIALLY WORKIGN CODE ABOVE THIS ////////TRYING ANOTHER METHORD BELOW




// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ActivatedRoute, Router } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import { of } from 'rxjs';
// import { DataService } from 'src/app/services/data.service';

// import { ProductDetailsComponent } from './product-details.component';

// describe('ProductDetailsComponent', () => {
//   let component: ProductDetailsComponent;
//   let fixture: ComponentFixture<ProductDetailsComponent>;


//   let productService:DataService;
//   let  router:Router;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ProductDetailsComponent ],
//       imports:[RouterTestingModule,  HttpClientTestingModule],
//       providers:[
//         {provide:Router,useValue:{navigate:()=>{}}},
//         {provide:ActivatedRoute,useValue:{
//           params: of({id:123})
        
//         }},
//         {provide:DataService,useValue:{
//           getOne:()=> of({id:123,nmae:'product'})
//         }}
//       ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ProductDetailsComponent);
//     component = fixture.componentInstance;
//     productService=TestBed.inject(DataService);
//     router=TestBed.inject(Router);
//     // router=TestBed.get(Router);
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should load product detail', () => {
//     spyOn(productService, 'getOne')
//     .and
//     .callThrough();
//     component.ngOnInit();
//     fixture.detectChanges();
//     expect(productService.getOne).toHaveBeenCalledWith(123);
//     expect(component.singleProductData).toEqual({id: 123, name: 'Product'});
//   });

// });






//////////////////////////////////////////////////
