import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizeHandleComponent } from './resize-handle/resize-handle.component';
import { ResizeLineComponent } from './resize-line/resize-line.component';



@NgModule({
  declarations: [ResizeHandleComponent, ResizeLineComponent],
  imports: [
    CommonModule
  ],
  exports: [ResizeHandleComponent, ResizeLineComponent]
})
export class ResizeModule { }
