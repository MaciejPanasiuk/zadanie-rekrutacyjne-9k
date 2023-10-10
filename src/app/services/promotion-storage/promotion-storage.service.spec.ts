import { TestBed } from '@angular/core/testing';

import { PromotionStorageService } from './promotion-storage.service';

describe('PropotionStorageService', () => {
  let service: PromotionStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromotionStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
