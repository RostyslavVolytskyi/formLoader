import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CreateItemService } from '../shared/services/create-item.service';
import { EditItemService } from '../shared/services/edit-item.service';

import { FormControl, Validators } from '@angular/forms';
import { VALIDATOR } from '../shared/constants/validators.regex';

import { Item } from'../shared/models/item.model';
import { ItemWithIndex } from'../shared/models/item-with-index.model';

@Component({
  selector: 'form-loader',
  templateUrl: './form-loader.component.html',
  styleUrls: ['./form-loader.component.scss']
})

export class FormLoaderComponent implements OnInit {

	@Output() closeFormLoader = new EventEmitter<boolean>();
	nameValue: string;
	emailValue: string;
	editMode: boolean = false;
	saveMode: boolean = false;
	doneBtn: boolean = false;
	item: Item;
	itemWithIndex: ItemWithIndex;
	emailFormControl: FormControl;
	nameFormControl: FormControl;

  constructor(private createItemService: CreateItemService,
  	private editItemService: EditItemService) { }

  ngOnInit(): void {
  	this.disableInputs(undefined, false);

  	this.itemWithIndex = this.editItemService.getItem();
  	this.item = this.itemWithIndex.item;
		if(this.item.name && this.item.email) {
			this.closeFormLoader.emit(true);
			this.disableInputs(this.item, true);
			this.nameValue = this.item.name;
			this.emailValue = this.item.email;
			this.editMode = true;
		}
  }

  createItem(name: string, email: string): void {
  	this.createItemService.setItem({name, email});
		this.closeFormLoader.emit(false);
  }

  editItem(): void {
  	this.disableInputs(this.item, false);
  	this.editMode = false;
  	this.saveMode = true;
  }

  saveItem(): void {
  	this.itemWithIndex.item.name = this.nameValue;
  	this.itemWithIndex.item.email = this.emailValue;
		this.createItemService.setItem(this.itemWithIndex);
		this.disableInputs(this.item, true);
  	this.saveMode = false;
  	this.doneBtn = true;
  }

  closeForm(): void {
  	this.closeFormLoader.emit(false);
  	this.doneBtn = false; 
  }

  disableInputs(item: Item = {name: '', email: ''}, flag: boolean): void {
		this.emailFormControl = new FormControl({value: item.email, disabled: flag}, [Validators.required,
  		Validators.pattern(VALIDATOR.email)]);
		this.nameFormControl = new FormControl({value: item.name, disabled: flag}, [Validators.required,
  		Validators.pattern(VALIDATOR.lettersOnly)]);
  }
}

