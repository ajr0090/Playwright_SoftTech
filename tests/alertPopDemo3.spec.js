import { test, chromium, expect } from '@playwright/test';

test('alert pop and its child elements handle validation', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

  await page.on('dialog', async (dialog) => {
    console.log(dialog.message());
    // await dialog.accept();
    await dialog.accept('Akash');
  });

  // await page.locator("button[id='alertButton']").click();
  // await page.waitForTimeout(5000);
  // await page.locator("button[id='timerAlertButton']").click();
  // await page.waitForTimeout(5000);
  // await page.locator("button[id='confirmButton']").click();
  // await page.waitForTimeout(5000);
  await page.locator("button[id='promtButton']").click();
  await page.waitForTimeout(5000);
});
