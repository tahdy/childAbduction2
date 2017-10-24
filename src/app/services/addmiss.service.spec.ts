import { TestBed, inject } from '@angular/core/testing';

import { AddmissService } from './addmiss.service';

describe('AddmissService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddmissService]
    });
  });

  it('should be created', inject([AddmissService], (service: AddmissService) => {
    expect(service).toBeTruthy();
  }));
});
