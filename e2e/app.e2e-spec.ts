import { Ng4OnePage } from './app.po';

describe('ng4-one App', () => {
  let page: Ng4OnePage;

  beforeEach(() => {
    page = new Ng4OnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
