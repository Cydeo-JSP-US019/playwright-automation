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

    let inactiveNextButton = page.locator("//button[@class='next-button disabledButton']");
    await expect(inactiveNextButton).toBeDisabled();


  });

  test('Verify that the Next button becomes enabled when a payment plan is selected', async ({ page }) => {
    await CommonUI.selectPaymentPlan(page);

    let activeNextButton = page.locator("//button[text()='Next']");

    await expect(activeNextButton).toBeVisible();
    await expect(activeNextButton).toBeEnabled();

  });

  test('Verify Clicking the active next button will change the stepper 2 color to green', async ({ page }) => {
    await CommonUI.selectPaymentPlan(page, "installments");

    let activeNextButton = page.locator("//button[text()='Next']");
    await activeNextButton.click();

    let paymentPlanCircle = page.locator("(//div[@class='step-circle'])[2]");
    await expect(paymentPlanCircle).toHaveCSS('background-color', 'rgb(172, 245, 138)');

  });

});