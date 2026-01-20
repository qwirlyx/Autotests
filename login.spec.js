const { test, expect } = require('@playwright/test');

test.describe('Login form', () => {

  test('should show error with invalid credentials', async ({ page }) => {
    await page.goto('https://taxi.yandex.ru/login');

    await page.fill('#username', 'wrong_user');
    await page.fill('#password', 'wrong_password');

    await page.click('button[type="submit"]');

    const errorMessage = await page.locator('.login-error');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText(/Неверный логин или пароль/i);
  });

});
