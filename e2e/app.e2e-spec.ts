import { FormLoaderPage } from './app.po';

describe('form-loader App', () => {
  let page: FormLoaderPage;

  beforeEach(() => {
    page = new FormLoaderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
