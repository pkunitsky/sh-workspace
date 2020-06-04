import { async, TestBed } from '@angular/core/testing';
import { ExternalModule } from './external.module';

describe('ExternalModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExternalModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ExternalModule).toBeDefined();
  });
});
