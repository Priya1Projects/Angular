import { DemoappPage } from './app.po';

describe('demoapp App', function() {
  let page: DemoappPage;

  beforeEach(() => {
    page = new DemoappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
