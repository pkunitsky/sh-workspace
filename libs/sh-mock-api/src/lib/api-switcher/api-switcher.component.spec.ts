import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSwitcherComponent } from './api-switcher.component';

describe('SwitchOfflineApiActionComponent', () => {
  let component: ApiSwitcherComponent;
  let fixture: ComponentFixture<ApiSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
