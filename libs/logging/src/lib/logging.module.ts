import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggingService } from './logging.service';
import { LogWriterConsole } from './log-writers/log-writer-console';

@NgModule({
  imports: [CommonModule],
  providers: [
    LoggingService,
    LogWriterConsole,
  ],
})
export class LoggingModule {}
