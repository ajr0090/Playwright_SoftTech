import { test, chromium, expect } from '@playwright/test';

test('alert pop and its child elements handle validation', async ({ page }) => {
  await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');

  await page.on('dialog', async (dialog) => {
    console.log(dialog.message());
    await dialog.accept();
  });

  await page.locator("input[id='login1']").fill('abc');
  await page.locator("button[name='proceed']").click();
  await page.waitForTimeout(5000);
});
