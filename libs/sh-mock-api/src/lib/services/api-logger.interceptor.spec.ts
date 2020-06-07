import { TestBed } from '@angular/core/testing';

import { ApiLoggerInterceptor } from './api-logger.interceptor';

describe('ApiLoggerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiLoggerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiLoggerInterceptor = TestBed.inject(ApiLoggerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
