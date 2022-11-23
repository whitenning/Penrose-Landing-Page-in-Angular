import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicenameService {
  constructor(private _http: HttpClient) {}
  getdata() {
    return this._http.get(
      'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
    );
  }
}
