import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('initial total of cart items', () => {

// initially it should be zero
  let result = service.getTotalPrice();
  expect(result).toBe(0);
  });
  it('should not have any products at the starting',()=>{
    let count=service.cartItemList.length;
    expect(count).toBe(0);
  });

  it('should have a products as we add',()=>{
   service.addtoCart({brand: "Apple",
   category: "smartphones",
 });
    expect(service.cartItemList.length).toBe(1);
  })


  it('clear the cart when called',()=>{
   
    service.addtoCart({brand: "Apple",
    category: "smartphones",
  });
  service.removeAllCart(); 
    expect(service.cartItemList.length).toBe(0);
  });

  

});



