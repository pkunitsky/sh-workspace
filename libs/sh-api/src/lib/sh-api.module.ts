import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShApiConfig } from './sh-api-config';
import { EntitiesControllerService } from './controllers/entities-controller/entities-controller.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ]
})
export class ShApiModule {
  static forRoot(config: ShApiConfig): ModuleWithProviders {
    return {
      ngModule: ShApiModule,
      providers: [
        EntitiesControllerService,
        { provide: ShApiConfig, useValue: config }
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule?: ShApiModule) {
    if (parentModule) {
      throw new Error(
        'ShApiModule is already loaded. Import it in the AppModule only');
    }
  }
}
