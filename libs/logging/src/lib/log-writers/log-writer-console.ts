import { LogWriter } from './log-writer';
import { ILogEntry } from '../i-log-entry';
import { LogType } from '../severity.enum';
import { Injectable } from '@angular/core';
import { LoggingService } from './../logging.service';
import { LogEntry } from '../log-entry';
import { momentUtc } from '@workspace-sense-hub/components';
import { format_logger } from '../../../../components/src/lib/shared/constants/moment-formatting';

/**
 * Use this writer to log information to the browser console.
 */
@Injectable()
export class LogWriterConsole extends LogWriter {
  readonly info = '#3498db';
  readonly danger = '#e74c3c';
  readonly warning = '#f39c12';
  readonly success = '#27ae60';

  constructor(private loggingService: LoggingService) {
    super();
    this.subs.add(this.loggingService.logEntries$.subscribe(logEntry => this.handleLogEntry(logEntry)));
  }

  handleLogEntry(logEntry: ILogEntry) {
    const message = `${logEntry.message} ${momentUtc(logEntry.timestamp).format(format_logger)}`;

    switch (logEntry.severity) {
      case LogType.Information: console.log(message); break;
      case LogType.Warning: console.log(message); break;
      case LogType.Error: console.log(message); break;
      case LogType.Success: default: console.log(message); break;
    }
  }
}
