import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MyMaterialModule } from './material.module';
import { FormLoaderModule } from './form-loader/form-loader.module';
import { ItemsPlaceholderModule } from './items-placeholder/items-placeholder.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';

import { CreateItemService } from './shared/services/create-item.service';
import { EditItemService } from './shared/services/edit-item.service';
import { SearchService } from './shared/services/search.service';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    FormLoaderModule,
    HttpModule,
    MyMaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    ItemsPlaceholderModule
  ],
  providers: [
    CreateItemService,
    EditItemService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
