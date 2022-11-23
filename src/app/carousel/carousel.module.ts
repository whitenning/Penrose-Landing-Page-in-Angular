import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { FilterPricePipe } from '../filter-price.pipe';

@NgModule({
  declarations: [CarouselComponent, FilterPricePipe],
  imports: [CommonModule],
  exports: [CarouselComponent],
})
export class CarouselModule {}
