// const { test, chromium, expect } = require('@playwright/test');

import { test, chromium, expect } from '@playwright/test';

test('Element validations from mutliple grandChild & child of iframe from webPage', async () => {
  const browser = await chromium.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto('https://praf002.github.io/');

  await page.locator("input[id='name']").fill('Akash Rodge');

  const mobileFrame = await page.frameLocator("iframe[id='mobileFrame']");

  await mobileFrame.locator("input[id='mob']").fill('9834135844');

  const showcheckbox = await mobileFrame.frameLocator(
    "iframe[id='showcheckbox']",
  );

  await showcheckbox.locator("input[id='Jenkins']").click();

  await page.waitForTimeout(5000);

  const addressframe = await page.frameLocator("iframe[id = 'addressframe']");
  await addressframe.locator("input[id='add']").fill('NANDED INDIA');

  const toolframe = await addressframe.frameLocator("iframe[id = 'toolframe']"); //  await toolframe.locator("a[href='https://www.selenium.dev/']").click();
  await toolframe
    .locator("select[id='course']")
    .selectOption({ label: 'GitHub' });

  const seleniumFrame = await toolframe.frameLocator(
    "iframe[id = 'seleniumFrame']",
  );

  await seleniumFrame.locator("a:has-text('Selenium')").click();
  await page.waitForTimeout(5000);
  await browser.close();
});
