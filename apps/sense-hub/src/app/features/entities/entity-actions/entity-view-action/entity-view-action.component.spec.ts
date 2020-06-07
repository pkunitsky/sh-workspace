import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityViewActionComponent } from './entity-view-action.component';

describe('EntityViewActionComponent', () => {
  let component: EntityViewActionComponent;
  let fixture: ComponentFixture<EntityViewActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityViewActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityViewActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
