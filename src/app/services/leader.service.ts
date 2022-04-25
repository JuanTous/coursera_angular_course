import { Injectable } from '@angular/core';
import { leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): leader[] {
    return LEADERS;
  }

  getFeaturedLeader(): leader {
    return LEADERS.filter((lea) => (lea.featured === true))[0]
  }
}
