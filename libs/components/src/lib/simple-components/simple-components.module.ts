import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';
import { CloseButtonComponent } from './close-button/close-button.component';
import { LoadingModule } from '../loading/loading.module';
import { DirectivesModule } from '../shared/directives/directives.module';
import { RemoveButtonComponent } from './remove-button/remove-button.component';

@NgModule({
  declarations: [
    CloseButtonComponent,
    RemoveButtonComponent,
  ],
  imports: [
    CommonModule,
    MomentModule,
    DirectivesModule,
    LoadingModule,
  ],
  exports: [
    CloseButtonComponent,
    RemoveButtonComponent
  ]
})
export class SimpleComponentsModule {
}
