import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AlertModule } from 'ng2-bootstrap';
import { CollapseModule } from 'ng2-bootstrap';
import { ProgressbarModule } from 'ng2-bootstrap'

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'
import { ROUTES } from './routes'



@NgModule({
  declarations: [
    AppComponent
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
