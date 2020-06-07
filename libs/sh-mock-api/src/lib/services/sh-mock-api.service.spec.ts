import { TestBed } from '@angular/core/testing';

import { ShMockApiService } from './sh-mock-api.service';

describe('ShMockApiService', () => {
  let service: ShMockApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShMockApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
