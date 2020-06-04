import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { CompactSearchComponent } from './compact-search/compact-search.component';
import { DirectivesModule } from '../shared/directives/directives.module';

@NgModule({
  declarations: [
    SearchComponent,
    SearchPipe,
    CompactSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchComponent,
    SearchPipe,
    CompactSearchComponent
  ]
})
export class SearchModule {
}
