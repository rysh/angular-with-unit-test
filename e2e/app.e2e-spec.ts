import { AngularWithUnitTestPage } from './app.po';

describe('angular-with-unit-test App', () => {
  let page: AngularWithUnitTestPage;

  beforeEach(() => {
    page = new AngularWithUnitTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
