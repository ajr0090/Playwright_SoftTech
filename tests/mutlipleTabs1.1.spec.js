const { test, chromium, expect } = require('@playwright/test');

// Pass { page, context } as arguments to the test function
test('Handling multiple windows with fixtures', async ({ page, context }) => {
  await page.goto('https://prafpawar11.github.io/multiplewindows.html');

  await page.locator("input[name='fname']").fill('Akash');

  await page.getByText('SauceDemo Link').click();

  const sauceDemoPage = await context.waitForEvent('page');
  await sauceDemoPage.waitForTimeout(2000);
  // Use Promise.all to catch the popup reliably
  // const [sauceDemoPage] = await Promise.all([
  //   context.waitForEvent('page'),
  //   page.getByText('SauceDemo Link').click(),
  // ]);

  // Interact with the new window fixture
  await sauceDemoPage.locator("input[name='user-name']").fill('standard_user');
  await sauceDemoPage.locator("input[name='password']").fill('secret_sauce');
  await sauceDemoPage.locator("input[name='login-button']").click();
  await sauceDemoPage.waitForTimeout(2000);
  // Return to the original page fixture
  await page.bringToFront();
  await page.waitForTimeout(2000);
  await page.locator("input[name='lname']").fill('Rodge');
  await page.waitForTimeout(2000);
});
