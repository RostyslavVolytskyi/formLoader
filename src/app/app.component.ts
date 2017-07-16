import { Component, OnInit } from '@angular/core';
import { EditItemService } from './shared/services/edit-item.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { SearchService } from './shared/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  formVisible: boolean = false;
  buttonName: string = 'Open';
  searchTerms = new Subject<string>();
  languages: Array<string> = ['English', 'German'];

  constructor(private editItemService: EditItemService,
  	private searchService: SearchService,
  	private translate: TranslateService) { }

  ngOnInit() {
  	this.translate.setDefaultLang('en');
    this.translate.use('en');
  	this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
			if(this.buttonName == 'Open' || this.buttonName == 'Öffnen') {
				this.buttonName = event.translations.OPEN;
			} else {
				this.buttonName = event.translations.CLOSE;
			}
		}); 
  }

  toggleForm(): void {
  	this.formVisible = !this.formVisible;
  	this.updateButtonName();
  	this.editItemService.setItem({}, null);
  }

  closeForm(close: boolean): void {
		this.formVisible = close;
		this.updateButtonName();
  }

  updateButtonName(): void {
  	if(this.translate.currentLang == "en") {
  		this.buttonName = this.formVisible ? 'Close' : 'Open';
  	} else {
  		this.buttonName = this.formVisible ? 'Schließen' : 'Öffnen';
  	}
  }

  searchItem(term: string): void {
  	this.searchService.searchTerms(term);
  }

  changeLanguage(language: string): void {
  	if(language == "English") {
  		this.translate.use('en');
  	} else {
  		this.translate.use('ge');
  	}
  }
}
