import { Assignment1.5Page } from './app.po';

describe('assignment1.5 App', () => {
  let page: Assignment1.5Page;

  beforeEach(() => {
    page = new Assignment1.5Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
