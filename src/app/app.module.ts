import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { BooksDataService } from './core/books-data.service';
import { MyShelfService } from './core/my-shelf.service';
import { HeaderComponent } from './header/header.component';
import { BooksCartComponent } from './books-cart/books-cart.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    component : BooksCartComponent
  }
  // {
  //   path: '**',
  //   component: LoginComponent
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    BooksCartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService, AuthGuard, BooksDataService, MyShelfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
