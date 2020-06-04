import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { DEFAULT_PERFECT_SCROLLBAR_CONFIG, LoadingModule } from '@workspace-sense-hub/components';
import { ShMockApiModule } from '@workspace-sense-hub/sh-mock-api';
import { EntitiesTableModule } from './features/entities-table/entities-table.module';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ShMockApiModule.forRoot({ apiBase: environment.apiBase }),
    // ShApiModule.forRoot({ apiBase: environment.apiBase }),
    LoadingModule,
    EntitiesTableModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
