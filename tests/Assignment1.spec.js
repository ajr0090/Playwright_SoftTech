// const { test, chromium } = require('@playwright/test');  // CommonJs
import { test, chromium, expect } from '@playwright/test'; // ESmodule (latest)

test('New User Registration', async () => {
  const browser = await chromium.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto('https://copyright.gov.in/UserRegistration/frmNewUser.aspx');

  await page
    .locator("select[id='ctl00_ContentPlaceHolder1_ddlTitle']")
    .selectOption({ index: 1 });

  await page
    .locator("input[name='ctl00$ContentPlaceHolder1$txtFName']")
    .fill('Akash');

  await page
    .locator("input[name='ctl00$ContentPlaceHolder1$txtLName']")
    .fill('Rodge');

  await page
    .locator("input[name='ctl00$ContentPlaceHolder1$txtAddress']")
    .fill('House No.1 / 128 , Saikripa,');

  await page
    .locator("input[name='ctl00$ContentPlaceHolder1$txtAddress2']")
    .fill('Bhavani Nagar');
  await page
    .locator("input[id='ctl00_ContentPlaceHolder1_txtCity']")
    .fill('Kandhar');

  await page
    .locator("select[id='ctl00_ContentPlaceHolder1_ddlCountry']")
    .selectOption({ label: 'India' });

  const stateDropdown = page.locator(
    "select[id='ctl00_ContentPlaceHolder1_ddlState']",
  );
  await stateDropdown.selectOption({ label: 'MAHARASHTRA' });

  // District picklist value is not loaded for selected State picklist
  const districtDropdown = page.locator(
    "select[id='ctl00_ContentPlaceHolder1_ddlDistrict']",
  );
  districtDropdown.selectOption({ label: 'Nanded' });
  // ************** Trial 1 : wait for element **********************

  // await page
  //   .locator("select[id='ctl00_ContentPlaceHolder1_ddlDistrict']")
  //   .locator('option:has-text("Nanded")')
  //   .waitFor();
  // ******************* Trial 2 : Use toPass to wait for the District to populate and select it ************************

  // const districtDropdown = page.locator(
  //   "select[id='ctl00_ContentPlaceHolder1_ddlDistrict']",
  // );

  // // 2. Select the State
  // await stateDropdown.selectOption({ label: 'MAHARASHTRA' });

  // // 3. Use toPass to wait for the District to populate and select it
  // // This will retry every 100ms until the 'Nagpur' option exists and is selected
  // await expect(async () => {
  //   await expect(districtDropdown).toBeEnabled();

  //   await districtDropdown.selectOption({ label: 'Nanded' });
  // }).toPass({
  //   intervals: [500, 1000, 2000], // Custom retry intervals
  //   timeout: 15000, // Total wait time (10 seconds)
  // });

  // ******************* Trial 3 : Use dispatch  ************************

  // await stateDropdown.dispatchEvent('change');

  // // 2. WAIT for the PostBack/Loading to finish
  // // We wait until the District dropdown has more than just the "-Select-" option
  // const districtDropdown = page.locator(
  //   "select[id='ctl00_ContentPlaceHolder1_ddlDistrict']",
  // );

  // await expect(async () => {
  //   // Count options: if count > 1, it means the list has loaded
  //   const count = await districtDropdown.locator('option').count();
  //   if (count <= 1) {
  //     throw new Error('Districts not loaded yet');
  //   }

  //   // Now try to select
  //   await districtDropdown.selectOption({ label: 'Nanded' });
  // }).toPass({
  //   intervals: [500, 1000, 2000],
  //   timeout: 15000,
  // });

  await page
    .locator("input[name='ctl00$ContentPlaceHolder1$txtNationality']")
    .fill('Indian');

  await page.fill('#ctl00_ContentPlaceHolder1_txtPinCode', '431714');

  await page.fill(
    '#ctl00_ContentPlaceHolder1_txtEmail',
    'akash.jiabhau.rodge0090@gmail.com',
  );

  await page.fill('#ctl00_ContentPlaceHolder1_txtPhoneNumber', '02466-223048');
  await page.fill('#ctl00_ContentPlaceHolder1_txtMobileNum', '9404665149');
  await page.fill('#ctl00_ContentPlaceHolder1_txtUserId', 'ajr0090');

  await page
    .locator("input[id='ctl00_ContentPlaceHolder1_rdoSociety']")
    .click();

  let timeStamp = Date.now();
  await page.screenshot({
    path: `captureShots/UserRegistration${timeStamp}.png`,
  });
});
