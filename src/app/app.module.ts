import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { SearchDetailComponent } from './components/search-detail/search-detail.component';
import { SearchSkeletonComponent } from './components/search-skeleton/search-skeleton.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchNotfoundComponent } from './components/search-notfound/search-notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SearchDetailComponent,
    SearchSkeletonComponent,
    SearchResultsComponent,
    SearchNotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
