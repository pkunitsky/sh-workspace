import { LogType } from './severity.enum';

export interface ILogEntry {
  severity: LogType;
  message: string;
  timestamp: Date;
}
