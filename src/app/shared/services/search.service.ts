import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject';
import { Item } from'../models/item.model';
import { ItemWithIndex } from'../models/item-with-index.model';

import 'rxjs/add/operator/map';
 
 
@Injectable()
export class SearchService {
 
  constructor() {}

  private _searchTerms = new Subject<string>();
  searchTerms$ = this._searchTerms.asObservable();

  searchTerms(term: string) {
  	this._searchTerms.next(term);
  }

  getTerm() {
  	return this.searchTerms$;
  }
}