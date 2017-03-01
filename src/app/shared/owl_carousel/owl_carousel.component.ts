import {Component, Input, ElementRef, HostBinding, AfterViewInit, OnDestroy} from '@angular/core';
declare var $: any;

@Component({
  selector: 'owl-carousel',
  template: `<ng-content></ng-content>`
})
export class OwlCarousel implements AfterViewInit, OnDestroy{
  @HostBinding('class') defaultClass = 'owl-carousel';
  @Input() private options: Object;
  private $owlElement: any;
  private defaultOptions: any = {};

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    for (var key in this.options) {
      this.defaultOptions[key] = this.options[key];
    }
    this.$owlElement = $(this.el.nativeElement).owlCarousel(this.defaultOptions);
  }

  moveNextSlide() {
    this.$owlElement.trigger('next.owl.carousel');
  }

  movePrevSlide() {
    this.$owlElement.trigger('prev.owl.carousel');
  }

  ngOnDestroy() {
    this.$owlElement.data('owlCarousel').destroy();
    this.$owlElement = null;
  }
}
