import { ILoggingConfig } from './i-logging-config';
import { Injectable } from '@angular/core';
import { IConfiguration } from '@workspace-sense-hub/configuration';

@Injectable()
export class LoggingConfig implements IConfiguration {
  applicationName: string;
  version: string;
  loggingConfig: ILoggingConfig;
}
