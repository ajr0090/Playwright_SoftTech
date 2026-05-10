import { test, chromium, expect } from '@playwright/test';

test('validate multiple windows and its elements', async ({
  page,
  context,
}) => {
  await page.goto('https://prafpawar11.github.io/multiplewindows.html');
  await page.locator("input[name='fname']").fill('Akash');

  await page.getByText('cogmento CRM Link').click();

  const cogmentoPage = await context.waitForEvent('page');

  await cogmentoPage.locator("input[name='username']").fill('Admin');
  await cogmentoPage.locator("input[name='password']").fill('admin123');
  await cogmentoPage.locator("input[name='login']").click();
  await cogmentoPage.waitForTimeout(5000);

  await page.bringToFront();

  await page.locator("input[name='lname']").fill('Rodge');

  await page.getByText('SauceDemo Link').click();

  const sauceDemoPage = await context.waitForEvent('page');
  await sauceDemoPage.waitForTimeout(2000);
  // Interact with the new window fixture
  await sauceDemoPage.locator("input[name='user-name']").fill('standard_user');
  await sauceDemoPage.locator("input[name='password']").fill('secret_sauce');
  await sauceDemoPage.locator("input[name='login-button']").click();
  await sauceDemoPage.waitForTimeout(2000);

  await cogmentoPage.bringToFront();
  await cogmentoPage.waitForTimeout(2000);

  await cogmentoPage.locator("xpath='//span[text()='PIM']'").click();
  await cogmentoPage.locator("xpath='//button[text()=' Add ']'").click();

  await cogmentoPage.locator("input[name='firtName']").fill('standard_user');
  await cogmentoPage.locator("input[name='lastName']").fill('standard_user');
  await cogmentoPage.locator("xpath='//button[text()=' Save ']'").click();
  await cogmentoPage.waitForTimeout(2000);

  await page.bringToFront();
  await page.waitForTimeout(2000);
  await page.locator("input[name='address']").fill('Nanded');
});
