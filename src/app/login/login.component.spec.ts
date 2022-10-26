// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { LoginComponent } from './login.component';


// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   // beforeEach(async () => {
//   //   await TestBed.configureTestingModule({
//   //     declarations: [ LoginComponent ]
//   //   })
//   //   .compileComponents();
//   // });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;

//     fixture.detectChanges();
//   });

//   xit('should create', () => {
//     expect(component).toBeTruthy();
//   });


  
// });


// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { DebugElement } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { RouterTestingModule } from '@angular/router/testing';
// import { DataService } from '../services/data.service';

// import { LoginComponent } from './login.component';



// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule,
//         HttpClientTestingModule
//       ],
//       declarations: [ LoginComponent ],
//       providers:[DataService]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;

//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('checking the heading of login element', () => {
//     const headingElemet:HTMLElement=fixture.nativeElement;
//     const heading = headingElemet.querySelector('h2');
//     expect(heading?.textContent).toEqual('Welcome');
//     // const headingSelector=fixture.nativeElement.query(By.css('.welcome-heading'))
  
//     // expect(headingSelector.textContent).toEqual('Welcome')
//   });

//   it('checking the heading using debug element', () => {
       
//     const h2De:DebugElement=fixture.debugElement;
//     const h2ele:HTMLElement=h2De.nativeElement.querySelector('h2');
//     expect(h2ele.textContent).toEqual('Welcome');
//   });



  
// });










import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { DataService } from '../services/data.service';

import { LoginComponent } from './login.component';



xdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;



  beforeEach(async () => {

  
let testData={ 
  name:"hello",
  email:'hello@gmail.com'

}
const dataservice=jasmine.createSpyObj<DataService>(['getUsers']);
    const getUsersSpy=dataservice.getUsers.and.returnValue(of(testData))
    await TestBed.configureTestingModule({
      // imports: [
      //   RouterTestingModule,
      //   HttpClientTestingModule
      // ],
      declarations: [ LoginComponent ],
      providers:[DataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checking the heading of login element', () => {
    fixture.detectChanges();
    const headingElemet:HTMLElement=fixture.nativeElement;
    const heading = headingElemet.querySelector('h2');
    expect(heading?.textContent).toEqual('Welcome');
    // const headingSelector=fixture.nativeElement.query(By.css('.welcome-heading'))
  
    // expect(headingSelector.textContent).toEqual('Welcome')
  });





  
});
