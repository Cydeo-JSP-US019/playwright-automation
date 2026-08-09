import { test, expect } from '@playwright/test';
import { CommonUI } from './CommonUI';

test.describe('Payment Plan Page', () => {

    test.beforeEach(async ({ page }) => {
        await CommonUI.login(page);
        await CommonUI.completeStartApplicationStep(page);
    });

  test('Verify that Step 2 stepper is blue and Step 1 stepper is green.', async ({ page }) => {
    let startApplicationCircle = page.locator("(//div[@class='step-circle'])[1]");
    let paymentPlanCircle = page.locator("(//div[@class='step-circle'])[2]");

    await expect(startApplicationCircle).toHaveCSS('background-color', 'rgb(172, 245, 138)');
    await expect(paymentPlanCircle).toHaveCSS('background-color', 'rgb(1, 201, 255)');

  });

  test('Verify that the Next button is disabled by default.', async ({ page }) => {

  });

  test('Verify that the Next button becomes enabled when a payment plan is selected', async ({ page }) => {

  });

  test('Verify Clicking the active next button will change the stepper 2 color to green', async ({ page }) => {

  });

});