import { TestBed } from '@angular/core/testing';

import { MascotaCart } from './mascota-cart';

describe('MascotaCart', () => {
  let service: MascotaCart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MascotaCart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
