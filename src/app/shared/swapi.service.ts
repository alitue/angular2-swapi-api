import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SwapiService {
  private url = 'https://swapi.co/api/films';

  constructor(private http: Http) {}

  getFilms() {
    return this.http.get(this.url).pipe(map(res => res.json()));
  }

  getFilmById(id) {
    return this.http.get(`${this.url}/${id}`).pipe(map(res => res.json()));
  }
}
