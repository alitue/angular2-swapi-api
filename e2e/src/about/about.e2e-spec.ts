import { AboutPage } from './about.po';

describe('About', () => {
  let page: AboutPage;

  beforeEach(() => {
    page = new AboutPage();
  });

  it('should display a particular poster title films/1', () => {
    page.navigateTo();
    expect(page.getPosterTitle()).toEqual('A NEW HOPE');
  });
});
