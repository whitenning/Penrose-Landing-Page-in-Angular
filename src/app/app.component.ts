import { Component } from '@angular/core';
import { ServicenameService } from './servicename.service';
import { FilterPricePipe } from './filter-price.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pen_rose-contail-landing';
  quotes: any;
  filteredQuotes: any = [];
  filtering: any;
  video = false;

  constructor(private _apiservie: ServicenameService) {}
  ngOnInit() {
    this._apiservie.getdata().subscribe((res) => {
      this.quotes = res;
    });
  }

  showVideo(): void {
    if (this.video === false) {
      this.video = true;
    } else {
      this.video = false;
    }
  }
}
