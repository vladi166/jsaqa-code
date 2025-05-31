const { test, expect } = require('@playwright/test');
const { chromium } = require("playwright");
const {email, password, incorrectEmail, incorrectPassword} = require("../user");

test('Successful authorization', async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 1000,
  })

  const page = await browser.newPage("https://netology.ru/?modal=sign_in");

  // Go to https://netology.ru/?modal=sign_in
  await page.goto('https://netology.ru/?modal=sign_in');

  // Fill [placeholder="Email"]
  await page.fill('[placeholder="Email"]', email);

  // Fill [placeholder="Пароль"]
  await page.fill('[placeholder="Пароль"]', password);

  // Click [data-testid="login-submit-btn"]
    await page.click('[data-testid="login-submit-btn"]');
    await page.screenshot({ path: '03_after_login_click_success.png', fullPage: true });

  // Click text=Моё обучение
  await page.click('text=Моё обучение');

  await expect(page).toHaveURL('https://netology.ru/profile/9866318');

  await page.screenshot({ path: "screenshotSuccessful.png", fullPage: true });

  await browser.close();

},6000);

/*test("Failed authorization", async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 500,
  });

  const page = await browser.newPage("https://netology.ru/?modal=sign_in");

  // Go to https://netology.ru/?modal=sign_in
  await page.goto('https://netology.ru/?modal=sign_in');

  // Fill [placeholder="Email"]
  await page.fill('[placeholder="Email"]', incorrectEmail);

  // Fill [placeholder="Пароль"]
  await page.fill('[placeholder="Пароль"]', incorrectPassword);

  // Click [data-testid="login-submit-btn"]
  await page.click('[data-testid="login-submit-btn"]')

  const error = await page.locator('[data-testid="login-error-hint"]');

  await expect(error).toHaveText("Вы ввели неправильно логин или пароль.");

  await page.screenshot({ path: "screenshotFailed.png", fullPage: true });

  browser.close();

}, 50000);*/

