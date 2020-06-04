import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OopsNoContentComponent } from './oops-no-content.component';

describe('OopsNoContentComponent', () => {
  let component: OopsNoContentComponent;
  let fixture: ComponentFixture<OopsNoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OopsNoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OopsNoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
