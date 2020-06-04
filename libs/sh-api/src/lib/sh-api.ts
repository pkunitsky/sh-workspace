import { async, TestBed } from '@angular/core/testing';
import { ShApiModule } from './sense-hub-api.module';

describe('SenseHubApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShApiModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShApiModule).toBeDefined();
  });
});
