import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { LoadingModule } from 'ngx-loading';

describe('HomeComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent],
        imports: [LoadingModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
