import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityAddActionComponent } from './entity-add-action.component';

describe('EntityAddActionComponent', () => {
  let component: EntityAddActionComponent;
  let fixture: ComponentFixture<EntityAddActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityAddActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityAddActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
