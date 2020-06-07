import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTheadComponent } from './grid-thead.component';

describe('DataTableTheadComponent', () => {
  let component: GridTheadComponent;
  let fixture: ComponentFixture<GridTheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
