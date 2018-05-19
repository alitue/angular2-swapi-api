import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SwapiService {
  private url = 'https://swapi.co/api/films';

  constructor(private http: HttpClient) {}

  getFilms(): any {
    return this.http.get(this.url);
  }

  getFilmById(id): any {
    return this.http.get(`${this.url}/${id}`);
  }
}
