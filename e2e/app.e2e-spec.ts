import { Angular2FirstappPage } from './app.po';

describe('angular2-firstapp App', function() {
  let page: Angular2FirstappPage;

  beforeEach(() => {
    page = new Angular2FirstappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
