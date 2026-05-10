const { test, chromium, expect } = require('@playwright/test');

test('Element validations from iframe webPage', async ({ page }) => {
  await page.goto('https://prafpawar11.github.io/mainFrame.html');

  console.log(await page.title());
  console.log(await page.url());

  await page.locator("input[id='name']").fill('Akash Rodge');
  const mainFrame = await page.frameLocator("iframe[id='mainframe']");
  await mainFrame.locator("input[id='Jenkins']").click();
});
