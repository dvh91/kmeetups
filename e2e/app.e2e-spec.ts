import { KmeetupPage } from './app.po';

describe('kmeetup App', function() {
  let page: KmeetupPage;

  beforeEach(() => {
    page = new KmeetupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
