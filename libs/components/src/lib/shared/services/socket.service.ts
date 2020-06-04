import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { environment } from '../../../environment';
import { MeetingSocketDto, SocketEventTypes, SocketObjectTypes } from '../models/meeting-socket-dto';
import { SocketFrame } from '../models/socket-frame';
import { MeetingEventControllerService } from '../controllers/meeting-event-controller.service';
import { GlobalCalendarService } from '../../simple-components/calendar/global-calendar/global-calendar.service';
import { MeetingService } from '../../core/meeting/meeting-services/meeting.service';
import { Observable } from 'rxjs';
import { MeetingEventFilterDto } from '../models/meeting-event-filter-dto';
import { MeetingEventDto } from '../models/meeting-event-dto';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: any;
  private stompClient: any;

  constructor(public meetingService: MeetingService,
              private meetingEventController: MeetingEventControllerService) {
  }

  public connect() {
    this.socket = new SockJS(`${environment.api}/ws`);
    this.stompClient = Stomp.over(this.socket);
    this.stompClient.connect({user: null}, (frame) => {
      this.stompClient.subscribe('/meeting', (response: SocketFrame) => {
        try {
          const meetingSocket: MeetingSocketDto = JSON.parse(response.body);

          switch (meetingSocket.objectType) {
            case SocketObjectTypes.meeting_event:
              switch (meetingSocket.eventType) {
                case SocketEventTypes.updated: this.updateMeeting(meetingSocket); break;
                case SocketEventTypes.canceled: this.cancelMeeting(meetingSocket); break;
              }
              break;

            case SocketObjectTypes.meeting_series:
              switch (meetingSocket.eventType) {
                case SocketEventTypes.added: this.addMeetings(meetingSocket); break;
                case SocketEventTypes.updated: this.updateAllSameMeetings(meetingSocket); break;
              }
              break;
          }
        } catch (error) {
          console.error(error);
        }
      });
    });
  }

  // todo do not use time change in application

  addMeetings(meetingSocket: MeetingSocketDto) {
    this.getChangedMeetings(meetingSocket).subscribe((meetings) => {
      this.meetingService.simpleSocketAddMeetings(meetings);
    });
  }

  updateMeeting(meetingSocket: MeetingSocketDto) {
    this.getChangedMeetings(meetingSocket).subscribe((oneMeetingArray) => {
      this.meetingService.simpleSocketUpdateMeeting(null, oneMeetingArray[0]);
    });
  }

  updateAllSameMeetings(meetingSocket: MeetingSocketDto) {
    this.getChangedMeetings(meetingSocket).subscribe((manyMeetings) => {
      this.meetingService.simpleSocketUpdateMeetings(manyMeetings);
    });
  }

  cancelMeeting(meetingSocket: MeetingSocketDto) {
    this.meetingService.simpleSocketRemoveMeeting(meetingSocket.ids[0]);
  }

  public disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
  }

  public getChangedMeetings(meetingSocket: MeetingSocketDto): Observable<Array<MeetingEventDto>> {
    const filter: MeetingEventFilterDto = SocketObjectTypes.meeting_event === meetingSocket.objectType
      ? {meetingDateIds: meetingSocket.ids}
      : {meetingIds: meetingSocket.ids};

    return this.meetingEventController.load(filter);
  }
}
