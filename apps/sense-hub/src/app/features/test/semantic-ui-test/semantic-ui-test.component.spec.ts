import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticUiTestComponent } from './semantic-ui-test.component';

describe('SemanticUiTestComponent', () => {
  let component: SemanticUiTestComponent;
  let fixture: ComponentFixture<SemanticUiTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanticUiTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanticUiTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
