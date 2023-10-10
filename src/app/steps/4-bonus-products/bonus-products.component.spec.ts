import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusProductsComponent } from './bonus-products.component';

describe('BonusProductsComponent', () => {
  let component: BonusProductsComponent;
  let fixture: ComponentFixture<BonusProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BonusProductsComponent]
    });
    fixture = TestBed.createComponent(BonusProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
