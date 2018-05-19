import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    browser.waitForAngularEnabled(true);
    return browser.get('/');
  }

  getPostersElements() {
    browser.driver.sleep(2000);
    return element.all(by.css('.cards'));
  }

  getFirstPosterElement() {
    return element.all(by.css('.cards')).first();
  }
}
