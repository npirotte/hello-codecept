Feature("todo");
import faker from "faker";

Scenario("List todos", async ({ I }) => {
  const todo = faker.internet.email();
  const r = await I.sendPostRequest("/todos", { title: todo });

  I.amOnPage("/");
  I.see(todo, "[data-test=todo-list]");
});

Scenario("Add a todo", ({ I }) => {
  const todo = faker.internet.email();

  I.amOnPage("/");
  I.fillField("Todo", todo);
  I.pressKey("Enter");
  I.see(todo, "[data-test=todo-list]");
});

Scenario("Add multiple todo", ({ I }) => {
  const todos = [
    faker.internet.email(),
    faker.internet.email()
  ];

  I.amOnPage("/");

  todos.forEach((todo, index) => {
    I.fillField("Todo", todo);
    I.pressKey("Enter");

    const list = todos.slice(0, index + 1);
    list.forEach((t) => {
      I.see(t, "[data-test=todo-list]");
    });
  });
});