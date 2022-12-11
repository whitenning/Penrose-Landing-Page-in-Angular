import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FilterPricePipe } from './filter-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavbarComponent,
    CarouselComponent,
    FilterPricePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CarouselComponent],
})
export class AppModule {}
