import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AboutComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    const fixture = TestBed.createComponent(AboutComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
