import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../shared/swapi.service';

@Component({
  selector: 'app-about',
  styleUrls: ['./about.component.scss'],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  id: number;
  loading = false;
  film: any;
  error: any;

  constructor(private swapi: SwapiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loading = true;

      this.swapi
        .getFilmById(this.id)
        .subscribe(data => this.handleData(data), err => this.handleError(err));
    });
  }

  handleData(data) {
    this.loading = false;
    this.film = data;
  }

  handleError(error) {
    this.loading = false;
    this.error = JSON.parse(error._body).detail;
  }
}
