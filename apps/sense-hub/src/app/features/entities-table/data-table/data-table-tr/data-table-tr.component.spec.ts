import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableTrComponent } from './data-table-tr.component';

describe('DataTableTrComponent', () => {
  let component: DataTableTrComponent;
  let fixture: ComponentFixture<DataTableTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
