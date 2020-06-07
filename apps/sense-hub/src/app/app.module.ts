import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DEFAULT_PERFECT_SCROLLBAR_CONFIG, LoadingModule } from '@workspace-sense-hub/components';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ShApiModule } from '@workspace-sense-hub/sh-api';
import { environment } from '../environments/environment';
import { ShMockApiModule } from '@workspace-sense-hub/sh-mock-api';
import { LoggingModule } from '@workspace-sense-hub/logging';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoadingModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ShApiModule.forRoot({ apiBase: environment.apiBase }),
    ShMockApiModule,
    LoggingModule
  ],
  providers: [
    {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
