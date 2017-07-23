import { AppTemplateMatrixPage } from './app.po';

describe('app-template-matrix App', () => {
  let page: AppTemplateMatrixPage;

  beforeEach(() => {
    page = new AppTemplateMatrixPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
