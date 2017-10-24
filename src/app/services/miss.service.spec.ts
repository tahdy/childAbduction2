import { TestBed, inject } from '@angular/core/testing';

import { MissService } from './miss.service';

describe('MissService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MissService]
    });
  });

  it('should be created', inject([MissService], (service: MissService) => {
    expect(service).toBeTruthy();
  }));
});
