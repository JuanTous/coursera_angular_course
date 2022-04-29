import { Injectable } from '@angular/core';
import { leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getLeaders(): Observable<leader[]> {
    return this.http.get<leader[]>(baseURL + 'leadership')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedLeader(): Observable<leader[]> {
    return this.http.get<leader[]>(baseURL + 'leadership?featured=true')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
