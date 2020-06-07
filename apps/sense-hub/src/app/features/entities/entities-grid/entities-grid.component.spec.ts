import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesGridComponent } from './entities-table.component';

describe('EntitiesTableComponent', () => {
  let component: EntitiesGridComponent;
  let fixture: ComponentFixture<EntitiesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitiesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitiesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
