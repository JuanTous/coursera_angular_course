import { Component, OnInit } from '@angular/core';
import { expand, flyInOut } from '../animations/app.animation';
import { LeaderService } from '../services/leader.service';
import { leader } from '../shared/leader';

@Component({
    // tslint:disable-next-line:use-host-property-decorator
    host: {
      '[@flyInOut]': 'true',
      'style': 'display: block;'
      },
      animations: [
        flyInOut(),
        expand()
      ],
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
