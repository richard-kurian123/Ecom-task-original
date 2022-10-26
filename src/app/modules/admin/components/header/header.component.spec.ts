import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from 'src/app/login/login.component';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  //   let mockRouter = {
  //   navigate: jasmine.createSpy('navigate')
  // }

  beforeEach(async () => {
    
    

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,

        // RouterTestingModule.withRoutes([
        //             {
        //               path:'login',
        //               component:LoginComponent
        //             }
        //           ])
      ],
      declarations: [ HeaderComponent ],
      // schemas:[NO_ERRORS_SCHEMA]

      // providers: [
      //           { provide: Router, useValue: mockRouter},DataService,AuthService
      //         ]
    })
    
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should logout on click', () => {
  
    // expect(component.isLoggedOut).toHaveBeenCalledWith();
  });


});








// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { HeaderComponent } from './header.component';
// import { Router } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { LoginComponent } from 'src/app/login/login.component';


// describe('HeaderComponent', () => {
//   let component: HeaderComponent;
//   let fixture: ComponentFixture<HeaderComponent>;

//   let mockRouter = {
//     navigate: jasmine.createSpy('navigate')
//   }

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule,
//         HttpClientTestingModule,
//         RouterTestingModule.withRoutes([
//           {
//             path:'login',
//             component:LoginComponent
//           }
//         ])
//       ],
//       declarations: [ HeaderComponent,LoginComponent ],
//       providers: [
//         { provide: Router, useValue: mockRouter},
//       ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HeaderComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('navigate to login', () => {
//     expect (mockRouter.navigate).toHaveBeenCalledWith (['login']);
//   });
// });