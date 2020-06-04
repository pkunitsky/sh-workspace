import { async, TestBed } from '@angular/core/testing';
import { ShMockApiModule } from './sh-mock-api.module';

describe('ShMockApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShMockApiModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShMockApiModule).toBeDefined();
  });
});
