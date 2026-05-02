const { test, chromium } = require('@playwright/test');

test('Page guidiing,ReLoading & Login SauceDemo Site', async () => {
  const chromeBrowser = await chromium.launch({ headless: false });
  // const context = await chromeBrowser.newContext();

  const page = await chromeBrowser.newPage();

  await page.goto('https://www.saucedemo.com/');

  const pageTitle = await page.title();
  console.log('Title : ' + pageTitle);

  const pageUrl = await page.url();
  console.log('URL : ' + pageUrl);
  await page.waitForTimeout(2000);
  await page.reload();
  await page.waitForTimeout(2000);

  await page.locator("input[id='user-name']").fill('standard_user');
  await page.locator("input[id='password']").fill('secret_sauce');
  await page.locator("input[id='login-button']").click();

  await page.waitForTimeout(5000);

  await page.close();
  await chromeBrowser.close();
});
