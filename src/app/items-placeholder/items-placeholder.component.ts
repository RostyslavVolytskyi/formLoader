import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { CreateItemService } from '../shared/services/create-item.service';
import { EditItemService } from '../shared/services/edit-item.service';
import { SearchService } from '../shared/services/search.service';

import { Item } from '../shared/models/item.model';
import { ItemWithIndex } from '../shared/models/item-with-index.model';

@Component({
  selector: 'items-placeholder',
  templateUrl: './items-placeholder.component.html',
  styleUrls: ['./items-placeholder.component.scss']
})
export class ItemsPlaceholderComponent implements OnInit {

  @Output() openFormLoader = new EventEmitter<boolean>();
  allItems: Array<Item> = [];
  searchValue: string;

  constructor(private createItemService: CreateItemService,
    private editItemService: EditItemService,
    private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.getTerm().subscribe((term: string) => {
      this.searchValue = term;
    });

  	this.createItemService.getItem().subscribe((item: Item | ItemWithIndex) => {
      if(Number.isInteger((<ItemWithIndex>item).index)) {
        let itemIndex = (<ItemWithIndex>item).index;
        this.allItems.splice(itemIndex, 1, (<ItemWithIndex>item).item);
      } else {
        this.allItems.push(<Item>item);
      }
  	});
  }

  editItem(item: Item, index: number): void {
    this.editItemService.setItem(item, index);
    this.openFormLoader.emit(true);
  }

  deleteItem(index: number): void {
    this.allItems.splice(index, 1);
  }
}
