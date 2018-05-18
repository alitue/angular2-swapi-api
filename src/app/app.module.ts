import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { LoadingModule } from 'ngx-loading';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { SwapiService } from './shared/swapi.service';

@NgModule({
  declarations: [AppComponent, AboutComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    HttpModule,
    LoadingModule
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
