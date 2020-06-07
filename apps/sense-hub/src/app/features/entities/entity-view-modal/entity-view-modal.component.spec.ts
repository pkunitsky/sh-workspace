import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityViewModalComponent } from './entity-view-modal.component';

describe('EntityViewModalComponent', () => {
  let component: EntityViewModalComponent;
  let fixture: ComponentFixture<EntityViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
