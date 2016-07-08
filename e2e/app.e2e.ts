import { RxTestsPage } from './app.po';

describe('rx-tests App', function() {
  let page: RxTestsPage;

  beforeEach(() => {
    page = new RxTestsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rx-tests works!');
  });
});
