export class RxTestsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rx-tests-app h1')).getText();
  }
}
