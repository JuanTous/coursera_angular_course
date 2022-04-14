import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatToolbarModule} from '@angular/material/toolbar'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule} from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import 'hammerjs';
import { DishService } from './services/dish.service';
import { MenuComponent } from './menu/menu.component';
import { DishdetailsComponent } from './dishdetails/dishdetails.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
