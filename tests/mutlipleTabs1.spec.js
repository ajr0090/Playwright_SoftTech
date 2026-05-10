const { test, chromium, expect } = require('@playwright/test');

test('Handling multiple windows', async () => {
  const browser = await chromium.launch({ headless: false });

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto('https://prafpawar11.github.io/multiplewindows.html');

  await page.locator("input[name='fname']").fill('Sunil');

  await page.getByText('SauceDemo Link').click();

  const sauceDemoPage = await context.waitForEvent('page');

  await sauceDemoPage.locator("input[name='user-name']").fill('standard_user');

  await sauceDemoPage.locator("input[name='password']").fill('secret_sauce');

  await sauceDemoPage.locator("input[name='login-button']").click();

  await page.bringToFront();

  await page.locator("input[name='lname']").fill('Pandit');
});
