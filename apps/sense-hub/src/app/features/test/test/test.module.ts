import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { SemanticUiTestModule } from '../semantic-ui-test/semantic-ui-test.module';


@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    SemanticUiTestModule
  ]
})
export class TestModule { }
