import faker from "faker";

Feature("Register modal");

Scenario("Register", ({ I }) => {
  const email = faker.internet.email();

  I.amOnPage("/");
  I.click("Register");
  I.fillField("Email", email);
  I.pressKey("Enter");
  I.see(`Hello ${email}!`);
  I.dontSeeElement("[role=dialog]");
});
