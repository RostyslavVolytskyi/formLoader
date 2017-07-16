import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormLoaderComponent } from './form-loader.component';

import { MyMaterialModule } from '../material.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
  	CommonModule,
  	MyMaterialModule,
  	TranslateModule,
  	FormsModule,
  	ReactiveFormsModule
  	],
  declarations: [FormLoaderComponent],
  exports: 		[FormLoaderComponent]
})
export class FormLoaderModule { }
