import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'
import { TrailService } from '../services/trail.service'
import { Trail } from '../models/trail.model'

@Component({
  selector: 'featured-trails',
  templateUrl: 'featured_trails.component.html',
  styleUrls: ['featured_trails.component.css']
})


export class FeaturedTrails implements OnInit {
  private countTrailsLimit: number;
  private featuredTrails: Trail[];
  private offset: number;
  private countFeaturedTrails: number;

  constructor(
    private trailServ: TrailService,
    private router: Router) {
    this.offset = 0;
    this.countTrailsLimit = 6;
    this.featuredTrails = [];
  }

  ngOnInit() {
    //get count trails for display button "MORE" if count is more than 6
    this.trailServ.getCountTrails(true)
      .subscribe((result) => this.countFeaturedTrails = result[0].count,
        (error) => console.log(error));
    //get first 6 trails
    this.getFeaturedTrails()
  }

  private getFeaturedTrails(offset: number = 0) {
    this.trailServ.getFeaturedTrails(this.countTrailsLimit, offset)
      .subscribe((result) => {this.featuredTrails = this.featuredTrails.concat(<Trail[]>result)
          console.log(this.featuredTrails)},
        (error) => console.log(error))
  }

  private getMoreFeaturedTrails() {
    this.getFeaturedTrails(this.offset += this.countTrailsLimit)
  }

  private allowedMoreFeaturedTrails() {
    return this.countFeaturedTrails > this.offset + this.countTrailsLimit
  }

  private getBackgroundImage(trail: Trail) {
    //get first imege trail or return default image from assets
    return !!trail.images && trail.images.length >= 1 ? trail.images[0] : '../../assets/images/default_trail.jpg'
  }

  private onSelectTrail(id: number) {
    this.router.navigate(['/trail', id])
  }
}
