import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyMaterialModule } from '../material.module';
import { TranslateModule } from '@ngx-translate/core';

import { ItemsPlaceholderComponent } from './items-placeholder.component';

import { SearchPipe } from '../shared/pipes/search.pipe';

@NgModule({
  imports: [
	  CommonModule,
	  MyMaterialModule,
	  TranslateModule
  ],
	  declarations: [
	  ItemsPlaceholderComponent,
	  SearchPipe
  ],
  exports: [ItemsPlaceholderComponent]
})
export class ItemsPlaceholderModule { }
