import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTrComponent } from './grid-tr.component';

describe('DataTableTrComponent', () => {
  let component: GridTrComponent;
  let fixture: ComponentFixture<GridTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
