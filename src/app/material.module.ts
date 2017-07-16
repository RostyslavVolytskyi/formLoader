import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdRadioModule } from '@angular/material';


@NgModule({
  imports: [BrowserAnimationsModule, MdButtonModule, MdInputModule, MdRadioModule],
  exports: [BrowserAnimationsModule, MdButtonModule, MdInputModule, MdRadioModule]
})
export class MyMaterialModule { }