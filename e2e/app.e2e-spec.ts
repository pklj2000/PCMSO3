import { PCMSO3Page } from './app.po';

describe('pcmso3 App', () => {
  let page: PCMSO3Page;

  beforeEach(() => {
    page = new PCMSO3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
