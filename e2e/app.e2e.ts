import { Angular2LoginSeedPage } from './app.po';

describe('angular2-login-seed App', function() {
  let page: Angular2LoginSeedPage;

  beforeEach(() => {
    page = new Angular2LoginSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-login-seed works!');
  });
});
