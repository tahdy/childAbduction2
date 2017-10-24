import { TestBed, inject } from '@angular/core/testing';

import { AddfoundService } from './addfound.service';

describe('AddfoundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddfoundService]
    });
  });

  it('should be created', inject([AddfoundService], (service: AddfoundService) => {
    expect(service).toBeTruthy();
  }));
});
