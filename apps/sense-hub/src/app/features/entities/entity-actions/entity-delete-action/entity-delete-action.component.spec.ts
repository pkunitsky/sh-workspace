import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDeleteActionComponent } from './entity-delete-action.component';

describe('EntityDeleteActionComponent', () => {
  let component: EntityDeleteActionComponent;
  let fixture: ComponentFixture<EntityDeleteActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityDeleteActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDeleteActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
