import { Component, OnInit, ElementRef, ViewChild } from '@angular/core'
import { TrailService } from '../../services/trail.service'


@Component({
  selector: 'countries',
  templateUrl: 'countries.component.html',
  styleUrls: ['countries.component.css']
})

export class CountriesComponent implements OnInit {
  @ViewChild('listContinents')
  private listContinents: ElementRef;
  private colectionGeographicObjects: any
  private showedMore: boolean = false
  

  constructor(private trailServ: TrailService) {
    this.colectionGeographicObjects = []
  }

  ngOnInit() {
    this.trailServ.getCountries().subscribe((res) => {
      // group result in object structure {continents: [{name: '', countries: [{name: '', regions: [{name: ''}]}]}]}
      this.colectionGeographicObjects = this.groupCountries(res)
      console.log(this.colectionGeographicObjects)
    },(error) => console.log(error))
  }

  private showMoreCountries() {
    this.showedMore = true;
    //show all countries
    for(let i=0; i < this.listContinents.nativeElement.children.length; i++ ) {
      this.listContinents.nativeElement.children.item(i).style['display']="block"
    }
  }

  private showLessCountries() {
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
