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
  groupBy = function(prop) {
  return this.reduce(function(groups, item) {
    var val = item[prop];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
}
  private groupCountries(array: any[]){
    // const result = [array.reduce((hash, { continent, country, region }) => {
    //   let currentContinent = hash.get(continent) || {continent, countries: [ { country, regions: []}]};
    //   // console.log(currentContinent);
    //   // let currentCountry = hash.get(country) || { country, regions: [] };
    //   // console.log(currentCountry);
    //   // // correntCountry.regions.push({region})
    //   currentContinent.countries.push({ country });
    //   console.log(currentContinent.countries[-1])
    //   return hash.set(continent, currentContinent);
    // }, new Map).values()];
    //



    var myList = [
      {time: '12:00', location: 'mall'    },
      {time: '9:00',  location: 'store'   },
      {time: '9:00',  location: 'mall'    },
      {time: '12:00', location: 'store'   },
      {time: '12:00', location: 'market'  },
    ];
    myList.reduce(function(groups, item) {
      var val = item[prop];
      groups[val] = groups[val] || [];
      groups[val].push(item);
      return groups;
    }, {});
    // console.log(result)
    //
    // let continent = {
    //   name: '',
    //   countries:[{
    //     name: '',
    //     regions: [{
    //       name: ''
    //     }]
    //   }]
    // };
    // let x = [
    //   {
    //     "size":"6.5",
    //     "width":"W",
    //     'height': '10'
    //   },
    //   {
    //     "size":"6.5",
    //     "width":"M",
    //     'height': '12'
    //   },
    //   {
    //     "size":"7.5",
    //     "width":"w",
    //     'height': '13'
    //   },
    //   {
    //     "size":"8",
    //     "width":"M",
    //     'height': '14'
    //   },
    //   {
    //     "size":"8",
    //     "width":"w"
    //   }
    // ]
    //
    // var _x = x.reduce(function(p,v){
    //   var existing = p.filter(function(item){return item.new_size === v.size})[0];
    //   if (existing){
    //     existing.width_group.push( v.width );
    //   } else {
    //     p.push( {
    //       new_size: v.size,
    //       width_group:[v.width]
    //     } );
    //   }
    //   return p;
    // },[]);
    //
    // console.log(_x)

    // var groupedArray = {};
    // //iterate through each element of array
    // array.forEach(function(val) {
    //   var currentContinent = groupedArray[val.continent]
    //   //if array key doesnt exist, init with empty array
    //   if (!currentContinent) groupedArray[val.continent] = [];
    //   //append color to this key
    //   groupedArray[val.continent].push(val.country);
    // });
    // //remove elements from previous array
    // this.continents.length = 0;
    // //replace elements with new objects made of
    // //key value pairs from our created object
    // for (var key in groupedArray) {
    //   this.continents.push({
    //     'continent': key,
    //     'countries': groupedArray[key]
    //   });
    // }
  }
}
