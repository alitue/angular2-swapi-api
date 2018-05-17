import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../shared/swapi.service';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  private films: any[];

  constructor(private swapi: SwapiService) {}

  ngOnInit() {
    this.swapi.getfilms().subscribe(res => {
      this.films = res;
    });
  }
}
