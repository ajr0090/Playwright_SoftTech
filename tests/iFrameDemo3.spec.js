const { test, chromium, expect } = require('@playwright/test');

test('Element validations from  grachild & child of iframe from webPage', async () => {
  const browser = await chromium.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto('https://prafpawar11.github.io/frame.html');

  await page.locator("input[id='name']").fill('Akash Rodge');

  const addressFramePage = await page.frameLocator("iframe[id='mainframe']");

  await addressFramePage.locator("input[id='add']").fill('NANDED INDIA');

  const checkboxFramePage = await addressFramePage.frameLocator(
    "iframe[id='child1']",
  );

  await checkboxFramePage.locator("input[id='Selenium']").click();

  await page.waitForTimeout(5000);
});
