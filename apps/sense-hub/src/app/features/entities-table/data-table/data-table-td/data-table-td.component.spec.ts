import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableTdComponent } from './data-table-td.component';

describe('DataTableTdComponent', () => {
  let component: DataTableTdComponent;
  let fixture: ComponentFixture<DataTableTdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableTdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
