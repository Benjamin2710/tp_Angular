import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMascotas } from './shop-mascotas';

describe('ShopMascotas', () => {
  let component: ShopMascotas;
  let fixture: ComponentFixture<ShopMascotas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopMascotas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopMascotas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
