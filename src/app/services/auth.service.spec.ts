import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    
     
    });
    service = TestBed.inject(AuthService);
   
  });

  it('should be created', () => {
    expect(service).toBeTruthy();

  });

it('schould set to true',()=>{

  service.login();
  expect(service.loggedIn).toBe(true);
})

it('schould set to false',()=>{

  service.logout();
  expect(service.loggedIn).toBe(false);
})
  
});
