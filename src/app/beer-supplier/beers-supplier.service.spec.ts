import { TestBed, inject } from '@angular/core/testing';

import { BeersSupplierService } from './beers-supplier.service';

describe('BeersSupplierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeersSupplierService]
    });
  });

  it('should be created', inject([BeersSupplierService], (service: BeersSupplierService) => {
    expect(service).toBeTruthy();
  }));
});
