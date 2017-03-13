import {Pipe, PipeTransform} from '@angular/core'

const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]

@Pipe({name: 'toMonth'})
export class ToMonthPipe implements PipeTransform {

  transform(value: number) {
    if(months.length > value-1 && value - 1 > 0 )
      return months[value-1] + '.';
    else
      return ''
  }
}
