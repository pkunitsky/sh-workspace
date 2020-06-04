import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableTheadComponent } from './data-table-thead.component';

describe('DataTableTheadComponent', () => {
  let component: DataTableTheadComponent;
  let fixture: ComponentFixture<DataTableTheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableTheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableTheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
