import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading/loading.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerAnimatedComponent } from './spinner-animated/spinner-animated.component';
import { ThreeDotsAnimatedComponent } from './three-dots-animated/three-dots-animated.component';
import { DirectivesModule } from '../shared/directives/directives.module';

@NgModule({
  declarations: [
    LoadingComponent,
    LoadingButtonComponent,
    SpinnerAnimatedComponent,
    ThreeDotsAnimatedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
  ],
  exports: [
    LoadingComponent,
    LoadingButtonComponent,
    SpinnerAnimatedComponent,
    ThreeDotsAnimatedComponent
  ]
})
export class LoadingModule {
}
