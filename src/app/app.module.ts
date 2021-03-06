import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeView } from './home/home-view.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeView, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule'},
      { path: 'd3', loadChildren: './d3/d3.module#D3Module'},
      { path: 'dates', loadChildren: './dates/dates.module#DatesModule'}
    ])
  ],
  declarations: [ AppComponent, HomeView ],
  exports: [ AppComponent ]
})
export class AppModule {}
