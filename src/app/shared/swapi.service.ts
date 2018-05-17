import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SwapiService {
  private url = 'https://swapi.co/api/films';

  constructor(private http: Http) {}

  getfilms() {
    return this.http.get(this.url).pipe(map(res => res.json()));
  }
}
