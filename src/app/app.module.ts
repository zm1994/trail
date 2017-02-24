import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AlertModule } from 'ng2-bootstrap';
import { CollapseModule } from 'ng2-bootstrap';
import { ProgressbarModule } from 'ng2-bootstrap'
import { RouterModule } from '@angular/router'
import { ROUTES } from './routes'
import { TabsModule } from 'ng2-bootstrap';
import {Md5} from 'ts-md5/dist/md5';

import { AppComponent } from './app.component';
import { CountriesComponent } from './home/countries/countries.component'
import { HomeComponent } from './home/home.component'
import { SearchComponent } from './search/search.component'
import { TrailComponent } from './trail/trail.component'

import { TrailService } from './services/trail.service'


@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    HomeComponent,
    SearchComponent,
    TrailComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDL66eZUuQ8TrT9rHyLhNqqoZsb5FsKcCo'
    }),
    AlertModule.forRoot(),
    BrowserModule,
    CollapseModule.forRoot(),
    FormsModule,
    HttpModule,
    ProgressbarModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    TabsModule.forRoot()
  ],
  providers: [TrailService, Md5],
  bootstrap: [AppComponent]
})
export class AppModule { }
