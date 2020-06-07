import { ILogEntry } from './i-log-entry';
import { LogType } from './severity.enum';

export class LogEntry implements ILogEntry {
  constructor(
    public severity: LogType,
    public message: string,
    public timestamp: Date = new Date(Date.now())
  ) {
  }
}
