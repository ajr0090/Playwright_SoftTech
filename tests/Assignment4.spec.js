import { test, chromium, expect } from '@playwright/test';

test('Right Click on element ,Double Click on element', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons');
  await page.locator("button[id='rightClickBtn']").click({ button: 'right' });
  // Locate the element by its ID and check its text content
  await expect(page.locator('#rightClickMessage')).toHaveText(
    'You have done a right click',
  );

  await page.waitForTimeout(2000);

  await page.locator("button[id='doubleClickBtn']").dblclick();
  // Locate the element by its ID and check its text content
  await expect(page.locator('#doubleClickMessage')).toHaveText(
    'You have done a double click',
  );
});

test('Drag and Drop element', async ({ page }) => {
  await page.goto('https://jqueryui.com/droppable/');

  const frame = await page.frameLocator('.demo-frame');
  const source = frame.locator('#draggable');
  const target = frame.locator('#droppable');

  await source.dragTo(target);
  await page.waitForTimeout(2000);
  // await frame.dragAndDrop('#draggable', '#droppable');
});

test('Scroll Down to Element', async ({ page }) => {
  await page.goto('https://www.redbus.in/');
  await page.getByText('Exclusive Offers on redBus').scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);
});

test('right click on element and handle popup', async ({ page }) => {
  await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
  await page.on('dialog', async (dialog) => {
    console.log(dialog.message());
    await dialog.accept();
  });
  await page.locator("xpath=//span[text()='right click me']").click({
    button: 'right',
  });

  await page.locator("xpath=//ul//li//span[text()='Copy']").click({
    button: 'right',
  });
  await page.waitForTimeout(2000);
});
