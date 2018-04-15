import { TestBed, inject } from '@angular/core/testing';

import { HttpreqService } from './httpreq.service';

describe('HttpreqService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpreqService]
    });
  });

  it('should be created', inject([HttpreqService], (service: HttpreqService) => {
    expect(service).toBeTruthy();
  }));
});
