import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiLoggerComponent } from './api-logger.component';

describe('EntitiesApiLoggerComponent', () => {
  let component: ApiLoggerComponent;
  let fixture: ComponentFixture<ApiLoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiLoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
