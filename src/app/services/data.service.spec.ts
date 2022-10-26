// import { HttpClient } from '@angular/common/http';
// import { TestBed } from '@angular/core/testing';

// import { DataService } from './data.service';

// describe('DataService', () => {
//   let httpClientSpy: jasmine.SpyObj<HttpClient>;

//   let service: DataService;

//   let POSTS = [
//     {
//       id: 1,
//       body: 'body 1',
//       title: 'title 1',
//     },
//     {
//       id: 2,
//       body: 'body 2',
//       title: 'title 2',
//     },
//     {
//       id: 3,
//       body: 'body 3',
//       title: 'title 3',
//     },
//   ];
  

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(DataService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });



import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DataService } from './data.service';

describe('DataService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  let service: DataService;

  let POSTS = [
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
  

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({});
    // service = TestBed.inject(DataService);
    service =new DataService(httpClientSpy);
  });

 describe('testing all get http calls',()=>{
  
  it('should return expected posts when called----getProducts()',()=>{
    httpClientSpy.get.and.returnValue(of(POSTS));
    service.getProducts().subscribe({
      next:(posts)=>{
        expect(posts).toEqual(POSTS);
      }
    });
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  })
 
  it('should return expected posts when called---- getUsers()',()=>{
    httpClientSpy.get.and.returnValue(of(POSTS));
    service.getUsers().subscribe({
      next:(posts)=>{
        expect(posts).toEqual(POSTS);
      }
    });
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  })

 })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
