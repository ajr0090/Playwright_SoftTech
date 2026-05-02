const { test, chromium } = require('@playwright/test');

test('Login SauceDemo Website', async () => {
  // it connect to playwright chrome browser in headed mode.
  const browser = await chromium.launch({ headless: false });

  //it open blank page in chrome browser
  const page = await browser.newPage();

  //open a URL
  await page.goto('https://www.saucedemo.com');

  await page.locator("input[id='user-name']").fill('standard_user');

  await page.locator("input[name='password']").fill('secret_sauce');

  await page.locator("input[value='Login']").click();
});
