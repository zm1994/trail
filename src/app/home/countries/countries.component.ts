import { Component, OnInit, ElementRef, ViewChild } from '@angular/core'
import { TrailService } from '../../services/trail.service'
import { Continent }  from '../../models/continent.model'

@Component({
  selector: 'countries',
  templateUrl: 'countries.component.html',
  styleUrls: ['countries.component.css']
})

export class CountriesComponent implements OnInit {
  colectionGeographicObjects: any
  showedMore: boolean = false
  @ViewChild('listContinents')
  listContinents: ElementRef

  constructor(private trailServ: TrailService) {
    this.colectionGeographicObjects = []
  }

  ngOnInit() {
    this.trailServ.getCountries().subscribe((res) => {
      console.log(res)
      this.colectionGeographicObjects = this.groupCountries(res)
      console.log(this.colectionGeographicObjects)
    },(error) => console.log(error))
  }

  showMoreCountries() {
    this.showedMore = true;
    //show all countries
    for(let i=0; i < this.listContinents.nativeElement.children.length; i++ ) {
      this.listContinents.nativeElement.children.item(i).style['display']="block"
    }
  }

  showLessCountries() {
    this.showedMore = false;
    //show only the first two elements
    for(let i=2; i < this.listContinents.nativeElement.children.length; i++ ) {
      this.listContinents.nativeElement.children.item(i).style['display']="none"
    }
  }

  private groupCountries(array: any[]){
     let continents = {};
     let countries = {};
     let regions = {};
     return array.reduce((res, reg) => {
          if (!res.continents) res.continents = [];
          if (!continents[reg.continent]) {
               let continent = {name: reg.continent, countries: []};
               res.continents.push(continent);
               continents[reg.continent] = continent;
          }
          if (!countries[reg.country]) {
               let country = {name: reg.country, regions: []};
               continents[reg.continent].countries.push(country);
               countries[reg.country] = country;
          }
          if (!regions[reg.region]) {
               let region = {name: reg.region};
               countries[reg.country].regions.push(region);
               regions[reg.region] = region;
          }
          return res;
     }, {});
  }
}
