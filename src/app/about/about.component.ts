import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { leader } from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders!: leader[]

  constructor(private service: LeaderService) { }

  ngOnInit(): void {
    this.service.getLeaders().subscribe(leaders => this.leaders = leaders);
  }

}
