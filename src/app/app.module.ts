import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from '@angular/material/button';
import { AuctionPhotoComponent } from './app-components/auction-photo/auction-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    AuctionPhotoComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
