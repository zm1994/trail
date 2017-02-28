import { Component, Input, ElementRef, HostBinding } from '@angular/core';
declare var $: any;

@Component({
  selector: 'owl-carousel',
  template: `<ng-content></ng-content>`
})
export class OwlCarousel {
  @HostBinding('class') defaultClass = 'owl-carousel';
  @Input() options: Object;
  
  $owlElement: any;

  defaultOptions: any = {};

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // use default - empty
    for (var key in this.options) {
      this.defaultOptions[key] = this.options[key];
    }
    this.$owlElement = $(this.el.nativeElement).owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
});
  }

  ngOnDestroy() {
    this.$owlElement.data('owlCarousel').destroy();
    this.$owlElement = null;
  }
}