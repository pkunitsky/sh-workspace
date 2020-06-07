import { Component, OnInit, ViewChild } from '@angular/core';
import { LoggingService, LogType } from '@workspace-sense-hub/logging';
import { ILogEntry } from '../i-log-entry';
import {format_logger} from '../../../../components/src/lib/shared/constants/moment-formatting';
import { PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { default_scrollbar_height } from '@workspace-sense-hub/components';

@Component({
  selector: 'sh-api-logger',
  templateUrl: './api-logger.component.html',
  styleUrls: ['./api-logger.component.scss']
})
export class ApiLoggerComponent implements OnInit {
  readonly logType = LogType;
  readonly format_logger = format_logger;
  readonly default_scrollbar_height = default_scrollbar_height;

  @ViewChild('scrollbarComponent', {read: PerfectScrollbarComponent}) scrollbarComponent: PerfectScrollbarComponent;

  constructor(private loggingService: LoggingService) {
  }

  logEntries: Array<ILogEntry> = [];

  ngOnInit(): void {
    this.loggingService.logEntries$.subscribe((logEntry) => {
      this.logEntries.push(logEntry);

      if (this.scrollbarComponent) {
        this.scrollbarComponent.directiveRef.scrollToBottom(0, 300);
      }
    });
  }

  clear() {
    this.logEntries = [];
  }

}
