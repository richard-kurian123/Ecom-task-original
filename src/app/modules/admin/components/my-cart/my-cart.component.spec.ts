// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { CartService } from 'src/app/services/cart.service';

// import { MyCartComponent } from './my-cart.component';


// describe('MyCartComponent', () => {
//   let component: MyCartComponent;
//   let fixture: ComponentFixture<MyCartComponent>;

//   // let POSTS:any;
//   // let mockPostService:any;

//   // let cartService = new CartService
  

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ MyCartComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(MyCartComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

// });


import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

import { MyCartComponent } from './my-cart.component';


describe('MyCartComponent', () => {
  let component: MyCartComponent;
  let fixture: ComponentFixture<MyCartComponent>;

  let POSTS:any;
  let mockPostService:any;


  beforeEach(async () => {

    POSTS = [
      {
        id: 1,
        body: 'body 1',
        title: 'title 1',
      },
      {
        id: 2,
        body: 'body 2',
        title: 'title 2',
      },
      {
        id: 3,
        body: 'body 3',
        title: 'title 3',
      },
    ];

     mockPostService = jasmine.createSpyObj(['getProducts']);

    await TestBed.configureTestingModule({
      declarations: [ MyCartComponent ],
      providers:[
        {
          provide:DataService,
          useValue:mockPostService
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set set post from service directly', () => {
    // mockPostService.getProducts.and.returnValue(of([{name:"asf"}]));
    // mockPostService.getProducts.and.fakeAsync(()=>{
    //   return of(POSTS);
    // });
    mockPostService.getProducts.and.returnValue(of(POSTS));
    


    // fixture.autoDetectChanges();
    component.ngOnInit();
    // tick();
    // expect(component.products.length).toBe(0);      //working
    expect(component.products.length).toBe(3);
  });

});

