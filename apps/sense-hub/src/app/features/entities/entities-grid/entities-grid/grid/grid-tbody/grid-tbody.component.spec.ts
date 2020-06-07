import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableTbodyComponent } from './grid-tbody.component';

describe('DataTableTbodyComponent', () => {
  let component: DataTableTbodyComponent;
  let fixture: ComponentFixture<DataTableTbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableTbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableTbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
