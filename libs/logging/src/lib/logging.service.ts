import { Injectable } from '@angular/core';
import { LogType } from './severity.enum';
import { LogEntry } from './log-entry';
import { ReplaySubject, Subject } from 'rxjs';
import { ILogEntry } from './i-log-entry';
import { format_logger } from '../../../components/src/lib/shared/constants/moment-formatting';
import * as moment from 'moment';

@Injectable()
export class LoggingService {
  logEntries$: Subject<ILogEntry> = new ReplaySubject<ILogEntry>(1);

  /**
   * The [LoggingService] constructor.
   */
  constructor() {
    this.publishLog(LogType.Information, `starting logging service at: ${moment().format(format_logger)}`);
  }

  /**
   * Use this method to send a log message with severity and source information
   * to the application's logger.
   * @param severity
   * @param message
   * @param timestamp
   */
  publishLog(severity: LogType, message: string, timestamp = new Date(Date.now())) {
    this.logEntries$.next(new LogEntry(
      severity,
      message,
      timestamp
    ));
  }
}
