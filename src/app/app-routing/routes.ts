import { Routes } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { DishdetailsComponent } from '../dishdetails/dishdetails.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',     component: MenuComponent },
  { path: 'contactus',  component: ContactComponent},
  { path: 'dishdetail/:id',     component: DishdetailsComponent },
  { path: 'aboutus',     component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];