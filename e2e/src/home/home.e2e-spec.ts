import { HomePage } from './home.po';

describe('Home', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display a list of posters', () => {
    page.navigateTo();
    expect(page.getPostersElements().count()).toBe(7);
  });

  it('should open a particular poster', () => {
    page.navigateTo();
    page.getFirstPosterElement().click();
  });
});
