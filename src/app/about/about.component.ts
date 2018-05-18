import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../shared/swapi.service';

@Component({
  selector: 'app-about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  id: number;
  film: any;

  constructor(private swapi: SwapiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.swapi.getFilmById(this.id).subscribe(res => {
        this.film = res;
      });
    });
  }

  getFakeImage(film: any) {
    const array = film.url.split('/');
    const id = array[array.length - 2];
    return this.swapi.getFakeImage(id);
  }
}
