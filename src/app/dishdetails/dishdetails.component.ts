import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { expand, flyInOut, visibility } from '../animations/app.animation';
@Component({
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      visibility(),
      expand()
    ],
  selector: 'app-dishdetails',
  templateUrl: './dishdetails.component.html',
  styleUrls: ['./dishdetails.component.scss']
})
export class DishdetailsComponent implements OnInit {

  visibility = 'shown';
  dishcopy!: any;
  formGroup!: FormGroup
  dish!: any;
  dishIds!: string[];
  prev!: string;
  next!: string;
  errMess!: string;
  errorMessage: any = {
    rating: "",
    comment: "",
    author : ""
  }

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('baseURL') public baseURL: string) {
      this.createForm()
     }

  ngOnInit() {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds, errmess => this.errMess=<any>errmess);
    this.route.params.pipe(switchMap((params: Params) => { this.visibility = 'hidden'; return this.dishservice.getDish(+params['id']); }))
    .subscribe(dish => { this.dish = dish; this.dishcopy = dish; this.setPrevNext(dish.id); this.visibility = 'shown'; },
      errmess => this.errMess = <any>errmess);
  }

  createForm() {
    this.formGroup = this.fb.group({
      rating: [5, [Validators.required] ],
      comment: ['', [Validators.required] ],
      author: ['', [Validators.required] ],
      date: [null, [] ]
    });
  }

  onSubmit() {
    let valid = true
    for (const key in this.errorMessage) {
      if (this.formGroup.controls[key].errors) {
        this.errorMessage[key] = "There is an error in this field"
        valid = false
      }
    }

    if (valid) {
      this.formGroup.controls["date"].setValue(new Date)
      this.dishcopy.comments.push(this.formGroup.value);
      this.dishservice.putDish(this.dishcopy)
        .subscribe(dish => {
          this.dish = dish; this.dishcopy = dish;
        },
        errmess => { this.dish = null; this.dishcopy = null; this.errMess = <any>errmess; });
      this.formGroup.reset({
        rating: 5,
        comment: "",
        author: "",
        date: null
      })
    }
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

}
