import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxAdvancedImageEditorModule } from 'ngx-advanced-image-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAdvancedImageEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
