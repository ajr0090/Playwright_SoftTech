const { test, chromium, expect } = require('@playwright/test');

test('Element validations from 2 child iframes of  webPage', async ({
  page,
}) => {
  await page.goto('https://prafpawar11.github.io/twoFrame.html');

  await page.locator("input[id='name']").fill('Akash Rodge');

  const frame1 = await page.frameLocator("iframe[id='chk']");
  await frame1.locator("input[id='Cucumber']").click();
  await page.waitForTimeout(1000);
  await frame1.locator("input[id='Jenkins']").click();
  await page.waitForTimeout(1000);
  const frame2 = await page.frameLocator("iframe[id='topic']");

  await frame2.locator("select[id='course']").selectOption({ label: 'GitHub' });
});
