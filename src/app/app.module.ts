import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { AirportsRouteService } from './services/airports-route.service'
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { SearchFormComponent } from './search-form/search-form.component'
import { RouterModule } from '@angular/router'
import { ROUTES } from './routes'

import { GmapsComponent } from './gmaps/gmaps.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    ContactListComponent,
    GmapsComponent,
    SearchFormComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDL66eZUuQ8TrT9rHyLhNqqoZsb5FsKcCo'
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AirportsRouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
