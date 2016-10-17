import { NgFbAppPage } from './app.po';

describe('ng-fb-app App', function() {
  let page: NgFbAppPage;

  beforeEach(() => {
    page = new NgFbAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
