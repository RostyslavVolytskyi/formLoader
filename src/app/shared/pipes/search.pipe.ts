
import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Item[], term: string): Item[] {
  	if(term){
    	return items.filter(item => item.name.includes(term));

  	} else {
  		return items;
  	}
  }
}