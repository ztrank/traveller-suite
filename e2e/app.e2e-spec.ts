import { TravellerSuitePage } from './app.po';

describe('traveller-suite App', () => {
  let page: TravellerSuitePage;

  beforeEach(() => {
    page = new TravellerSuitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
