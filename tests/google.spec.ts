import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://google.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://google.com/');

  // Click the get started link.
  await page.getByRole('button', { name: 'Penelusuran Google' }).click();

  // // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('link', { name: 'Basa Bali' })).toBeVisible();
});