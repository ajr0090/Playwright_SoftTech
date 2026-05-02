const { test, chromium } = require('@playwright/test');

test('Login SauceDemo Site and Capture Home Page Screenshot', async () => {
  const chromeBrowser = await chromium.launch({ headless: false });

  const page = await chromeBrowser.newPage();
  await page.goto('https://www.saucedemo.com/');

  // other way to interact with DOM elements based on ID attributes
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // conventional way to interact with DOM elements with cssSelector syntax
  // await page.locator("input[id='user-name']").fill('standard_user');
  // await page.locator("input[id='password']").fill('secret_sauce');
  // await page.locator("input[id='login-button']").click();

  await page.waitForTimeout(5000);

  let timeStamp = Date.now();
  await page.screenshot({ path: `${timeStamp}.png` });
});
