export class Angular2LoginSeedPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-login-seed-app h1')).getText();
  }
}
