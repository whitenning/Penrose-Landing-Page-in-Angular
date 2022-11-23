import { Component, Input, OnInit } from '@angular/core';

interface carouselTestimonial {
  description: 'string';
  name: 'string';
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() testimonials: carouselTestimonial[] = [];
  @Input() indicators = true;
  @Input() controls = true;

  selectedIndex = 0;
  ngOnInit(): void {}

  // sets index of testimonial to dots on click
  selectTestimonial(index: number): void {
    this.selectedIndex = index;
  }

  //Arrow left and right
  onLeftClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.testimonials.length - 1;
    } else {
      this.selectedIndex--;
    }
  }
  onRightClick(): void {
    if (this.selectedIndex === this.testimonials.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
