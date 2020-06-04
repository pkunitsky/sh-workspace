import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntityModalComponent } from './modal-add-entity.component';

describe('ModalAddEntityComponent', () => {
  let component: AddEntityModalComponent;
  let fixture: ComponentFixture<AddEntityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEntityModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEntityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
