import { Component, Inject, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  errMess!:string;
  dish!: Dish;
  promotion!: Promotion;
  leader!: leader

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderService: LeaderService,
    @Inject('baseURL') public baseURL: string) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish, errmess => this.errMess = <any>errmess);
    this.promotionservice.getFeaturedPromotion().subscribe(promotion => {this.promotion = promotion[0]}, errmess => this.errMess = <any>errmess);
    this.leaderService.getFeaturedLeader().subscribe(leader => this.leader = leader[0], errmess => this.errMess = <any>errmess);
  }
}