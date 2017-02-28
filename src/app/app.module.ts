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

import { AppComponent } from './app.component';
import { CountriesComponent } from './home/countries/countries.component'
import { FeaturedTrails } from './featured_trails/featured_trails.component'
import { FileSelectDirective } from 'ng2-file-upload';
import { HomeComponent } from './home/home.component'
import { SearchComponent } from './search/search.component'
import { TrailComponent } from './trail/trail.component'
import { HeaderComponent } from './header/header.component'
import { TrailPhotosComponent } from './trail/trail_photos/trail_photos.component'
import { PhotoUploaderComponent } from './trail/photo_uploader/photo_uploader.component'
import { OwlCarousel } from './shared/owl_carousel/owl_carousel.component'

import { TrailService } from './services/trail.service'

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    FeaturedTrails,
    FileSelectDirective,
    HeaderComponent,
    HomeComponent,
    OwlCarousel,
    SearchComponent,
    TrailComponent,
    TrailPhotosComponent,
    PhotoUploaderComponent
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
  providers: [TrailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
