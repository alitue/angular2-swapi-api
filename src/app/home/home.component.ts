import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwapiService } from '../shared/swapi.service';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  films: any[];
  loading = false;
  error: any;

  constructor(private router: Router, private swapi: SwapiService) {}

  ngOnInit() {
    this.loading = true;
    this.swapi
      .getFilms()
      .subscribe(data => this.handleData(data), err => this.handleError(err));
  }

  handleData(data) {
    this.loading = false;
    this.films = data.results;
  }

  handleError(data) {
    this.loading = false;
    this.error = data.error.detail;
  }

  onSelectFilm(film: any) {
    const array = film.url.split('/');
    const id = array[array.length - 2];
    this.router.navigate(['/about', id]);
  }
}
