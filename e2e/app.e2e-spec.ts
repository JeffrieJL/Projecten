import { FotoalbumPage } from './app.po';

describe('fotoalbum App', function() {
  let page: FotoalbumPage;

  beforeEach(() => {
    page = new FotoalbumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
