const { test, chromium } = require('@playwright/test');

test('Page guidiing,ReLoading & Login SauceDemo Site', async () => {
  const browser = await chromium.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto('https://www.saucedemo.com');

  await page.locator("input[id='user-name']").fill('standard_user');

  await page.locator("input[id='password']").fill('secret_sauce');

  await page.waitForTimeout(3000);

  await page.locator("input[value='Login']").click();

  await page.waitForTimeout(3000);

  const pageTitle = await page.title();
  console.log('Page Title :' + pageTitle);

  const pageUrl = await page.url();
  console.log('Page Url :' + pageUrl);

  await page.reload();

  await page.waitForTimeout(2000);

  await page.goBack();

  await page.waitForTimeout(2000);

  await page.goForward();
});
