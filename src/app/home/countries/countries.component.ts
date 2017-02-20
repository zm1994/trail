import { Component, OnInit, ElementRef, ViewChild } from '@angular/core'
import { TrailService } from '../../services/trail.service'

@Component({
  selector: 'countries',
  templateUrl: 'countries.component.html',
  styleUrls: ['countries.component.css']
})

export class CountriesComponent implements OnInit {
  continents: any[]
  showedMore: boolean = false
  @ViewChild('listContinents')
  listContinents: ElementRef

  constructor(private trailServ: TrailService) {
    this.continents = []
  }

  ngOnInit() {
    this.trailServ.getCountries().subscribe((res) => {
      console.log(res)
      this.groupCountries(res)
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
    var groupedArray = {};
    //iterate through each element of array
    array.forEach(function(val) {
      var curr = groupedArray[val.continent]
      //if array key doesnt exist, init with empty array
      if (!curr) {
        groupedArray[val.continent] = [];
      }
      //append color to this key
      groupedArray[val.continent].push(val.country);
    });
    //remove elements from previous array
    this.continents.length = 0;
    //replace elements with new objects made of
    //key value pairs from our created object
    for (var key in groupedArray) {
      this.continents.push({
        'continent': key,
        'countries': groupedArray[key]
      });
    }
  }
}
