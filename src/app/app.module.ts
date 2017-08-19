import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from "@angular/material";

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import "hammerjs";
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'card',  component: CardComponent },
  { path: 'news',  component: NewsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DashboardComponent,
    SidenavComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),BrowserAnimationsModule,MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
