import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';
import { CloseButtonComponent } from './close-button/close-button.component';
import { LoadingModule } from '../loading/loading.module';
import { DirectivesModule } from '../shared/directives/directives.module';

@NgModule({
  declarations: [
    CloseButtonComponent,
  ],
  imports: [
    CommonModule,
    MomentModule,
    DirectivesModule,
    LoadingModule
  ],
  exports: [
    CloseButtonComponent,
  ]
})
export class SimpleComponentsModule {
}
