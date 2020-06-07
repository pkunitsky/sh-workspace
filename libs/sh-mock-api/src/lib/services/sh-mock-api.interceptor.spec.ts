import { TestBed } from '@angular/core/testing';
import { ShMockApiInterceptor } from './sh-mock-api.interceptor';

describe('HttpMockRequestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ShMockApiInterceptor
    ]
  }));

  it('should be created', () => {
    const interceptor: ShMockApiInterceptor = TestBed.inject(ShMockApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
