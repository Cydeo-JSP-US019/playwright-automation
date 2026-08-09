import { test, expect } from "@playwright/test";
import { CommonUI } from "./CommonUI";

test.describe("Review Step", () => {

  test.beforeEach(async ({ page }) => {
    await CommonUI.login(page);
    await CommonUI.completeStartApplicationStep(page);
    await CommonUI.completePaymentPlanStep(page);
  });


  test("Verify that Step 1 & Step 2 steppers are green and Step 3 stepper is blue", async ({
    page,
  }) => {

  });

  test("Verify that the payment input fields are enabled and accept card details", async ({
    page,
  }) => {

  });

});
