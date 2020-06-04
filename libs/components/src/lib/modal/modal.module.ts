import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalHeaderActionComponent } from './modal-header/modal-header-action/modal-header-action/modal-header-action.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ModalHeaderActionCloseComponent } from './modal-header/modal-header-action/modal-header-action-close/modal-header-action-close.component';
import { ModalActionsComponent } from './modal-actions/modal-actions.component';
import { ModalBodyComponent } from './modal-body/modal-body.component';
import { SimpleComponentsModule } from '../simple-components/simple-components.module';
import { DirectivesModule } from '../shared/directives/directives.module';
import { ResizeModule } from '../resize/resize.module';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    PerfectScrollbarModule,
    SimpleComponentsModule,
    ResizeModule
  ],
  declarations: [
    ModalComponent,
    ModalActionsComponent,
    ModalBodyComponent,
    ModalHeaderComponent,
    ModalHeaderActionComponent,
    ModalHeaderActionCloseComponent,
  ],
  exports: [
    ModalComponent,
    ModalActionsComponent,
    ModalBodyComponent,
    ModalHeaderComponent,
    ModalHeaderActionComponent,
    ModalHeaderActionCloseComponent
  ]
})
export class ModalModule {
}
