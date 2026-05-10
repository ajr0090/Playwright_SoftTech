import { test, chromium, expect } from '@playwright/test';

test('alert pop and its child elements handle validation', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Alerts.html');

  await page.on('dialog', async (dialog) => {
    const a1 = await dialog.message();
    console.log(a1);

    await page.waitForTimeout(5000);

    await dialog.accept('Suraj');
  });

  await page.getByText('Alert with Textbox ').click();

  await page
    .getByText('click the button to demonstrate the prompt box ')
    .click();

  await page.waitForTimeout(5000);
});
