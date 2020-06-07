import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading/loading.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerAnimatedComponent } from './spinner-animated/spinner-animated.component';
import { ThreeDotsAnimatedComponent } from './three-dots-animated/three-dots-animated.component';
import { DirectivesModule } from '../shared/directives/directives.module';
import { LoadingMiniComponent } from './loading-mini/loading-mini.component';
import { SemanticUiModule } from '../../../../../apps/sense-hub/src/app/features/test/semantic-ui-test/semantic-ui/semantic-ui.module';

@NgModule({
  declarations: [
    LoadingComponent,
    LoadingButtonComponent,
    SpinnerAnimatedComponent,
    ThreeDotsAnimatedComponent,
    LoadingMiniComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    SemanticUiModule
  ],
  exports: [
    LoadingComponent,
    LoadingButtonComponent,
    SpinnerAnimatedComponent,
    ThreeDotsAnimatedComponent,
    LoadingMiniComponent
  ]
})
export class LoadingModule {
}
