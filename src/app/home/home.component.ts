import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwapiService } from '../shared/swapi.service';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  private films: any[];
  private loading = false;

  constructor(private router: Router, private swapi: SwapiService) {}

  ngOnInit() {
    this.loading = true;
    this.swapi.getFilms().subscribe(res => {
      this.loading = false;
      this.films = res.results;
    });
  }

  getFakeImage(film: any) {
    const array = film.url.split('/');
    const id = array[array.length - 2];
    return this.swapi.getFakeImage(id);
  }

  onSelectFilm(film: any) {
    const array = film.url.split('/');
    const id = array[array.length - 2];
    this.router.navigate(['/about', id]);
  }
}
