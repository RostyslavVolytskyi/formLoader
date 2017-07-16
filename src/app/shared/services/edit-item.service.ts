import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject';
import { Item } from'../models/item.model';

import 'rxjs/add/operator/map';
 
@Injectable()
export class EditItemService {
 
  constructor() {}

  item: Item;
  index: number;

  setItem(item, index) {
  	this.item = item;
  	this.index = index
  }

  getItem() {
  	return {item: this.item, index: this.index};
  }
}