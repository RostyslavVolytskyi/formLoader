import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject';
import { Item } from'../models/item.model';
import { ItemWithIndex } from'../models/item-with-index.model';

import 'rxjs/add/operator/map';
 
 
@Injectable()
export class CreateItemService {
 
  constructor() {}

  private _createItem = new Subject();
  createItem$ = this._createItem.asObservable();

  setItem(item: Item | ItemWithIndex) {
  	this._createItem.next(item);
  }

  getItem() {
  	return this.createItem$;
  }
}