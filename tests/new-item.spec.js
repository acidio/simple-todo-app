// @ts-check
const { test, expect } = require('@playwright/test');

test('has correct placeholder on input text for adding todo', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page.getByTestId("new-todo-input")).toHaveAttribute('placeholder', 'Add todo...');
});

test('has added a new item successfuly', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByTestId("new-todo-input").fill("New todo item");
  await page.getByTestId("new-todo-submit-btn").click();

  await expect(page.getByTestId("todo-item").last().getByTestId('todo-item-input-title')).toHaveAttribute('value', 'New todo item');
});
