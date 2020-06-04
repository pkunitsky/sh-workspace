import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableThComponent } from './data-table-th.component';

describe('DataTableThComponent', () => {
  let component: DataTableThComponent;
  let fixture: ComponentFixture<DataTableThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
