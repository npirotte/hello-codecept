Feature('load');

Scenario('Test that page load', ({ I }) => {
  I.amOnPage('/');
  I.see("This is a title");
});
