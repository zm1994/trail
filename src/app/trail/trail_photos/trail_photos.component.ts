import { Component, Input, ViewChild, OnChanges, ChangeDetectorRef } from '@angular/core'
import { OwlCarousel } from '../../shared/owl_carousel/owl_carousel.component'

@Component({
  selector: 'trail-photos',
  templateUrl: 'trail_photos.component.html',
  styleUrls: ['trail_photos.component.css']
})

export class TrailPhotosComponent{
  @Input() private photos: string[];
  @ViewChild('carousel')
  private carousel: OwlCarousel;
  private optionsCarousel: any;
  largeMode: boolean;
  choicedPhoto: string;

  constructor( private ref: ChangeDetectorRef ) {
    this.largeMode = false;
    this.optionsCarousel = {
      loop: false,
      margin: 2,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1 //set one image per page width on mobile
        },
        600: {
          items: 3, //set one image per page width on tablet
        },
        1000: {
          items: 5, //set one image per page width on desktop
        }
      }
    }
  }

  showLargeCarousel() {
    this.largeMode = true;
  }

  hideLargeCarousel(photo: string) {
    this.largeMode = false;
    this.choicedPhoto = photo;
  }
}
