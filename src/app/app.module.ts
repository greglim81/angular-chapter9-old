import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { UserFormComponent } from './user-form.component';
import { UserFormReactiveComponent } from './user-form-reactive.component';
import { SpotifySearchComponent } from './spotify-search.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }