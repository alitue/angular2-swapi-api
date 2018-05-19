import { browser, by, element } from 'protractor';

export class AboutPage {
  navigateTo() {
    browser.waitForAngularEnabled(true);
    return browser.get('/about/1');
  }

  getPosterTitle() {
    browser.driver.sleep(2000);
    return element(by.css('.title')).getText();
  }
}
